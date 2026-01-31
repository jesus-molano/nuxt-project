import {ref, watch, toValue, type MaybeRefOrGetter} from "vue";

const cache = new Map<string, any>()

export const useFetch = <T>(url: MaybeRefOrGetter<string>) => {
    const data = ref<T | null>(null)
    const hasError = ref(false)
    const error = ref<Error | null>(null)
    const isLoading = ref(true)

    let controller: AbortController | null = null

    const fetchData = async () => {
        const currentUrl = toValue(url)

        if (cache.has(currentUrl)) {
            data.value = cache.get(currentUrl)
            isLoading.value = false
            hasError.value = false
            error.value = null
            return
        }

        if (controller) controller.abort()
        const currentController = new AbortController()
        controller = currentController

        isLoading.value = true
        hasError.value = false
        error.value = null

        try {
            const response = await fetch(currentUrl, { signal: currentController.signal })

            if (!response.ok) {
                hasError.value = true
                error.value = new Error(`Failed to fetch: ${response.statusText}`)
                return
            }

            const result = await response.json()
            data.value = result
            cache.set(currentUrl, result)
        } catch (err: any) {
            if (err.name === 'AbortError') return

            hasError.value = true
            error.value = err as Error
        } finally {
            if (controller === currentController) {
                isLoading.value = false
            }
        }
    }

    watch(() => toValue(url), fetchData, { immediate: true })

    return {
        data,
        hasError,
        error,
        isLoading
    }
}

export type UseFetchReturn<T> = ReturnType<typeof useFetch<T>>