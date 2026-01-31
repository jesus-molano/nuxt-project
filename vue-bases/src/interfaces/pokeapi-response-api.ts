export default interface PokeapiResponseApi {
    abilities?: Abilities[];
    base_experience?: number;
    cries?: Cries;
    forms?: Forms[];
    game_indices?: GameIndices[];
    height?: number;
    held_items?: HeldItems[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Moves[];
    name?: string;
    order?: number;
    past_abilities?: PastAbilities[];
    past_stats?: PastStats[];
    species?: Species;
    sprites?: Sprites;
    stats?: Stats[];
    types?: Types[];
    weight?: number;
}

export interface Cries {
    latest?: string;
    legacy?: string;
}

export interface Species {
    name?: string;
    url?: string;
}

export interface Sprites {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
    other?: Other;
    versions?: Versions;
}

export interface Other {
    dream_world?: DreamWorld;
    home?: Home;
    "official-artwork"?: OfficialArtwork;
    showdown?: Showdown;
}

export interface DreamWorld {
    front_default?: string;
    front_female?: unknown;
}

export interface Home {
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface OfficialArtwork {
    front_default?: string;
    front_shiny?: string;
}

export interface Showdown {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface Versions {
    "generation-i"?: GenerationI;
    "generation-ii"?: GenerationII;
    "generation-iii"?: GenerationIII;
    "generation-iv"?: GenerationIV;
    "generation-v"?: GenerationV;
    "generation-vi"?: GenerationVI;
    "generation-vii"?: GenerationVII;
    "generation-viii"?: GenerationVIII;
    "generation-ix"?: GenerationIX;
}

export interface GenerationI {
    "red-blue"?: RedBlue;
    yellow?: Yellow;
}

export interface RedBlue {
    back_default?: string;
    back_gray?: string;
    back_transparent?: string;
    front_default?: string;
    front_gray?: string;
    front_transparent?: string;
}

export interface Yellow {
    back_default?: string;
    back_gray?: string;
    back_transparent?: string;
    front_default?: string;
    front_gray?: string;
    front_transparent?: string;
}

export interface GenerationII {
    crystal?: Crystal;
    gold?: Gold;
    silver?: Silver;
}

export interface Crystal {
    back_default?: string;
    back_shiny?: string;
    back_shiny_transparent?: string;
    back_transparent?: string;
    front_default?: string;
    front_shiny?: string;
    front_shiny_transparent?: string;
    front_transparent?: string;
}

export interface Gold {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
    front_transparent?: string;
}

export interface Silver {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
    front_transparent?: string;
}

export interface GenerationIII {
    emerald?: Emerald;
    "firered-leafgreen"?: FireredLeafgreen;
    "ruby-sapphire"?: RubySapphire;
}

export interface Emerald {
    front_default?: string;
    front_shiny?: string;
}

export interface FireredLeafgreen {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
}

export interface RubySapphire {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
}

export interface GenerationIV {
    "diamond-pearl"?: DiamondPearl;
    "heartgold-soulsilver"?: HeartgoldSoulsilver;
    platinum?: Platinum;
}

export interface DiamondPearl {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface HeartgoldSoulsilver {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface Platinum {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface GenerationIX {
    "scarlet-violet"?: ScarletViolet;
}

export interface ScarletViolet {
    front_default?: string;
    front_female?: unknown;
}

export interface GenerationV {
    "black-white"?: BlackWhite;
}

export interface BlackWhite {
    animated?: Animated;
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface Animated {
    back_default?: string;
    back_female?: unknown;
    back_shiny?: string;
    back_shiny_female?: unknown;
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface GenerationVI {
    "omegaruby-alphasapphire"?: OmegarubyAlphasapphire;
    "x-y"?: XY;
}

export interface OmegarubyAlphasapphire {
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface XY {
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface GenerationVII {
    icons?: Icons;
    "ultra-sun-ultra-moon"?: UltraSunUltraMoon;
}

export interface Icons {
    front_default?: string;
    front_female?: unknown;
}

export interface UltraSunUltraMoon {
    front_default?: string;
    front_female?: unknown;
    front_shiny?: string;
    front_shiny_female?: unknown;
}

export interface GenerationVIII {
    "brilliant-diamond-shining-pearl"?: BrilliantDiamondShiningPearl;
    icons?: Icons;
}

export interface BrilliantDiamondShiningPearl {
    front_default?: string;
    front_female?: unknown;
}

export interface Abilities {
    ability?: Ability;
    is_hidden?: boolean;
    slot?: number;
}

export interface Ability {
    name?: string;
    url?: string;
}

export interface Forms {
    name?: string;
    url?: string;
}

export interface GameIndices {
    game_index?: number;
    version?: Version;
}

export interface Version {
    name?: string;
    url?: string;
}

export interface HeldItems {
    item?: Item;
    version_details?: VersionDetails[];
}

export interface Item {
    name?: string;
    url?: string;
}

export interface VersionDetails {
    rarity?: number;
    version?: Version;
}

export interface Moves {
    move?: Move;
    version_group_details?: VersionGroupDetails[];
}

export interface Move {
    name?: string;
    url?: string;
}

export interface VersionGroupDetails {
    level_learned_at?: number;
    move_learn_method?: MoveLearnMethod;
    order?: unknown;
    version_group?: VersionGroup;
}

export interface MoveLearnMethod {
    name?: string;
    url?: string;
}

export interface VersionGroup {
    name?: string;
    url?: string;
}

export interface PastAbilities {
    abilities?: Abilities[];
    generation?: Generation;
}

export interface Generation {
    name?: string;
    url?: string;
}

export interface PastStats {
    generation?: Generation;
    stats?: Stats[];
}

export interface Stats {
    base_stat?: number;
    effort?: number;
    stat?: Stat;
}

export interface Stat {
    name?: string;
    url?: string;
}

export interface Types {
    slot?: number;
    type?: Type;
}

export interface Type {
    name?: string;
    url?: string;
}