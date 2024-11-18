export interface Wallpaper {
    url: string;
    name: string;
}

interface Wallie extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): Wallie[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper=>wallpaper.suggested)
}

export function useLikedWallpapers(): Wallie[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper=>wallpaper.liked)
}

export function useLibraryWallpapers(): Wallie[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper=>wallpaper.library)
}

export function useWallpapers(): Wallie[] {
    return [
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/BHZUYBrxSt6nFRRQqk7-Ng",
            name: "Mama's Boy",
            liked: true,
            suggested: true,
            library: false
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/gvFJnVp9TtSinv7vnkycNQ",
            name: "Lady in Black",
            liked: false,
            suggested: true,
            library: true
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/VCPeYs8ATNajA3XlAwWuQQ",
            name: "Rose",
            liked: true,
            suggested: false,
            library: true
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/UDZwXFj8QCmpRjbMeeKoaw",
            name: "Black Heart",
            liked: false,
            suggested: false,
            library: false
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/bBtJKHqzSEKXvlpfk7YwoA",
            name: "Dodo",
            liked: true,
            suggested: true,
            library: false
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/w2I6gBkzSUm0H8K022-dfA",
            name: "Artistic Purple",
            liked: false,
            suggested: true,
            library: false
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/__l0QIoqRu-eJavaDKSkdw",
            name: "Green Paradise",
            liked: true,
            suggested: false,
            library: true
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/I68Q15D0REuHMVoZJUgtkg",
            name: "Black Blonde",
            liked: false,
            suggested: true,
            library: false
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/sBDei9wKTJqWZNT-KC-knQ",
            name: "Fate's Planet",
            liked: false,
            suggested: false,
            library: true
        },
        {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/0QiGpS5qRIqP8V84IYCexw",
            name: "Cultural Shift",
            liked: false,
            suggested: true,
            library: false
        },{
            url: "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
            name: "Serenity Beach",
            liked: true,
            suggested: true,
            library: false
        },
        {
            url: "https://images.unsplash.com/photo-1730416933190-47c8c953011c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            name: "Golden Horizon",
            liked: false,
            suggested: true,
            library: true
        },
        {
            url: "https://images.unsplash.com/photo-1731068471639-299cf797b472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
            name: "Mystic Woods",
            liked: true,
            suggested: false,
            library: true
        },
        {
            url: "https://images.unsplash.com/photo-1729691692870-a957012d616a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
            name: "Sunset Peaks",
            liked: false,
            suggested: true,
            library: false
        },
    ];
}
