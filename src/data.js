import { v4 } from 'uuid'

export const videoList = [
    {
        id: "6HN3G2lOAi0",
        title: "Has Reservoir Dogs Aged Well?",
        url: "https://youtu.be/6HN3G2lOAi0",
        channelName: "Nerdwriter1",
        videoThumbnail: "https://i.ytimg.com/vi/6HN3G2lOAi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJCt7MVZqetCwQ3K14Tj_q0ewRxA",
        category: "video-essay",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

    },
    {
        id: "K0swOpFKMf8",
        title: "How to Introduce a Villain | Film Perfection",
        url: "https://youtu.be/K0swOpFKMf8",
        channelName: "Filmento",
        videoThumbnail: "https://i.ytimg.com/vi/F-JVNFE_0PE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4DKSn7WbtXEAswyqLazUjcJ2fJw",
        category: "video-essay",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

    },
    {
        id: "HBlZlmXyR5M",
        title: "Why the Suez Canal is so Insanely Important.. (and Nukes)",
        url: "https://youtu.be/HBlZlmXyR5M",
        channelName: "Johnny Harris",
        videoThumbnail: "https://i.ytimg.com/vi/9PbgYReEUO8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYoALWsPY9Bu_o4wnFw7oBM7ulyA",
        category: "video-essay",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

    },
    {
        id: "yyktccr5apU",
        title: "The Dark World of New Age Gurus | Documentary.",
        url: "https://youtu.be/yyktccr5apU",
        channelName: "James Jani",
        videoThumbnail: "https://i.ytimg.com/vi/yyktccr5apU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiEbNXCc2m5tYuuoXryl4Wrop2qQ",
        category: "video-essay",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

    },

    {
        id: "nS_6c4PyJvg",
        title: "THE CROWD WORK SPECIAL | Andrew Schulz | Stand Up Comedy",
        url: "https://youtu.be/nS_6c4PyJvg",
        channelName: "The Andrew Schulz",
        videoThumbnail: "https://i.ytimg.com/vi/nS_6c4PyJvg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtafdSAYk8j5DRDq_1bj1wP4xfVw",
        category: "comedy",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"
    },

    {
        id: "IZnTp_iCrRY",
        title: "How Spotify beat Apple at their own game",
        url: "https://youtu.be/IZnTp_iCrRY",
        channelName: "Slidebean",
        videoThumbnail: "https://i.ytimg.com/vi/IZnTp_iCrRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd43j1GO2wCXA_puSeQOcc56LueA",
        category: "case-study",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "4QMai1tWuyM",
        title: "Nikola Motor: disaster foretold",
        url: "https://youtu.be/4QMai1tWuyM",
        channelName: "Slidebean",
        videoThumbnail: "https://i.ytimg.com/vi/4QMai1tWuyM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCINDQFNT9rleSqFYCNcWRSkh14EA",
        category: "comedy",
        channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"
    },
]

export const playlist = [
    {
        id: v4(),
        name: "saved",
        videos: [
            {
                id: "yyktccr5apU",
                title: "The Dark World of New Age Gurus | Documentary.",
                url: "https://youtu.be/yyktccr5apU",
                channelName: "James Jani",
                videoThumbnail: "https://i.ytimg.com/vi/yyktccr5apU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiEbNXCc2m5tYuuoXryl4Wrop2qQ",
                category: "video-essay",
                channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

            },]
    },
    {
        id: v4(),
        name: "watch-later",
        videos: [{
            id: "K0swOpFKMf8",
            title: "How to Introduce a Villain | Film Perfection",
            url: "https://youtu.be/K0swOpFKMf8",
            channelName: "Filmento",
            videoThumbnail: "https://i.ytimg.com/vi/F-JVNFE_0PE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4DKSn7WbtXEAswyqLazUjcJ2fJw",
            category: "video-essay",
            channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"

        },

        {
            id: "nS_6c4PyJvg",
            title: "THE CROWD WORK SPECIAL | Andrew Schulz | Stand Up Comedy",
            url: "https://youtu.be/nS_6c4PyJvg",
            channelName: "The Andrew Schulz",
            videoThumbnail: "https://i.ytimg.com/vi/nS_6c4PyJvg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtafdSAYk8j5DRDq_1bj1wP4xfVw",
            category: "comedy",
            channelImage: "https://yt3.ggpht.com/ytc/AAUvwnhUW-Pp4de6P_dJ-bYc3v5vhBWM9Nb8tYHcaefKVQ=s68-c-k-c0x00ffffff-no-rj"
        }

        ]
    }
]

export const notesList = [
    {
        id: "6HN3G2lOAi0",
        notes: [
            {
                id: v4(),
                notes: "I killed Captain America"
            },
            {
                id: v4(),
                notes: "Dread It Run from it. Destiny Still Arrives"
            }
        ]
    },
    {
        id: "K0swOpFKMf8",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }, {
        id: "HBlZlmXyR5M",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }, {
        id: "yyktccr5apU",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }, {
        id: "nS_6c4PyJvg",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }, {
        id: "IZnTp_iCrRY",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }, {
        id: "4QMai1tWuyM",
        notes: [
            {
                id: v4(),
                notes: "I killed Iron Spider"
            },
            {
                id: v4(),
                notes: "Dread It Run from it"
            }
        ]
    }
]