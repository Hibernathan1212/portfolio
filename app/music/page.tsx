"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  ExternalLink,
  Heart,
  Disc,
  Volume2,
  VolumeX,
} from "lucide-react";
import { describe } from "node:test";

export default function MusicPage() {
  const [activeTab, setActiveTab] = useState<
    "created" | "listening" | "recommendations"
  >("listening");
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // My compositions
  const myMusic = [
    {
      id: 1,
      title: "Theme and Variations",
      duration: "16:02",
      instrument: "Piano - Orchestral - Electronic - Experimental Rock",
      year: "2023",
      audioSrc: "music/themeandvariation.mp3",
      description: `A theme and variation piece aiming to convey the feeling of being overwhelmed.\n
      Theme: Solo Piano (0:00)
      Variation 1: Piano Improvisation (0:22)
      Variation 2: Orchestral (3:01)
      Variation 3: Electronic (7:44)
      Variation 4: Rock/Metal (12:27)`,
    },
    {
      id: 2,
      title: "Tryptich",
      duration: "16:40",
      instrument: "Electronic - Orchestral - Piano",
      year: "2023",
      audioSrc: "music/tryptich.mp3",
      description: `A 3 part exploration of how journeys can be conveyed through music.\n
      1. Atmospheric journey - Original composition (0:00) 
      2. Emotional journey - Transformation of "Exit music for a film" (3:49)
      3. Harmonic journey - Performance of "Giant Steps" (12:04)`,
    },
  ];
  // My compositions
  // const myMusic = [
  //   {
  //     id: 1,
  //     title: "Theme and Variation",
  //     duration: "3:42",
  //     instrument: "Piano",
  //     year: "2023",
  //     audioSrc: "/music/themeandvariation.mp3", // Replace with actual audio file
  //   },
  //   {
  //     id: 2,
  //     title: "Urban Echoes",
  //     duration: "4:15",
  //     instrument: "Guitar & Synth",
  //     year: "2023",
  //     audioSrc: "/placeholder.mp3", // Replace with actual audio file
  //   },
  //   {
  //     id: 3,
  //     title: "Mountain Dreams",
  //     duration: "2:58",
  //     instrument: "Synthesizer",
  //     year: "2022",
  //     audioSrc: "/placeholder.mp3", // Replace with actual audio file
  //   },
  //   {
  //     id: 4,
  //     title: "Rainy Day Sonata",
  //     duration: "5:21",
  //     instrument: "Piano & Strings",
  //     year: "2022",
  //     audioSrc: "/placeholder.mp3", // Replace with actual audio file
  //   },
  // ]

  const listeningTo = [
    {
      id: 1,
      title: "A Stranger to You",
      artist: "Loathe",
      year: "2026",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022244c635d7f41716d16150df",
      genres: ["Metalcore", "Shoegaze", "Alternative Metal"],
      link: "https://open.spotify.com/album/6cIaFWlRULnxMrYsiRnBXv", // TODO: replace with album link
    },
    {
      id: 2,
      title: "Coda", // TODO: verify this is still their latest
      artist: "Novelists",
      year: "2024",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029c153c05f385b9e9ee4cd596",
      genres: ["Progressive Metalcore", "Djent", "Alternative Metal"],
      link: "https://open.spotify.com/album/1y3G3ozQ3CTRkBMi2N8QAn", // TODO
    },
    {
      id: 3,
      title: "Love Deluxe",
      artist: "Sade",
      year: "1992",
      image:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ee65bbd54f993b5f01d5c511", // TODO
      genres: ["Sophisti-Pop", "Quiet Storm", "R&B Soul"],
      link: "https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG", // TODO
    },
  ];
  // to get album cover, add https://open.spotify.com/oembed?url= before album url to get metadata then get thumbnail url
  // BETTER: https://covers.musichoarders.xyz/

  // Albums I recommend
  const recommendations = [
    {
      id: 1,
      title: "In Rainbows",
      artist: "Radiohead",
      year: "2007",
      image: "https://m.media-amazon.com/images/I/91VHRPtBtFL.jpg",
      genres: ["Alternative Rock", "Art Rock", "Electronic"],
      description:
        "A masterpiece of alternative rock, featuring intricate arrangements and emotional depth.",
      link: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
    },
    {
      id: 2,
      title: "Kid A",
      artist: "Radiohead",
      year: "2000",
      image: "https://m.media-amazon.com/images/I/91WwhnXOV3L.jpg",
      genres: ["Electronic", "Experimental Rock", "Ambient"],
      description:
        "A groundbreaking album that redefined Radiohead's sound with electronic experimentation.",
      link: "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7",
    },
    {
      id: 3,
      title: "Against the Fall of Night",
      artist: "Sungazer",
      year: "2019",
      image: "https://m.media-amazon.com/images/I/71fdOObls4L.jpg",
      genres: ["Jazz Fusion", "Electronic", "Progressive"],
      description:
        "An innovative blend of jazz fusion and electronic music with complex rhythmic structures.",
      link: "https://open.spotify.com/album/4MFr0ip96cIIQ29AW6o2aI",
    },
    {
      id: 4,
      title: "White Pony",
      artist: "Deftones",
      year: "2000",
      image: "https://m.media-amazon.com/images/I/51erVo5itiL.jpg",
      genres: ["Alternative Metal", "Art Rock", "Post-Metal"],
      description:
        "A landmark album that pushed the boundaries of alternative metal with atmospheric soundscapes.",
      link: "https://open.spotify.com/album/5LEXck3kfixFaA3CqVE7bC",
    },
    {
      id: 5,
      title: "Red",
      artist: "King Crimson",
      year: "1974",
      image: "https://m.media-amazon.com/images/I/71a1wnQKRTL.jpg",
      genres: ["Progressive Rock", "Art Rock"],
      description:
        "A powerful progressive rock album showcasing intense musicianship and complex compositions.",
      link: "https://open.spotify.com/album/6wHTG8iXfNTYcIB68YMqyF",
    },
    {
      id: 6,
      title: "Empathogen",
      artist: "WILLOW",
      year: "2024",
      image: "https://m.media-amazon.com/images/I/91yKcg61mnL.jpg",
      genres: ["Alternative Rock", "Pop", "Indie Rock"],
      description:
        "A sound that is a blend of pop, blues, jazz, prog rock, and something completely different.",
      link: "https://open.spotify.com/album/3Sa6CKpXKtVFo7Y0RIuijs",
    },
    {
      id: 7,
      title: "Take Me Back to Eden",
      artist: "Sleep Token",
      year: "2023",
      image: "https://m.media-amazon.com/images/I/71Rux74nUQL.jpg",
      genres: ["Progressive Metal", "Alternative Metal", "Electronic"],
      description:
        "A genre-defying album combining heavy riffs with atmospheric electronic elements.",
      link: "https://open.spotify.com/album/0qbjPJ2bYR9nRuGa1VEs7L",
    },
    {
      id: 8,
      title: "Amnesiac",
      artist: "Radiohead",
      year: "2001",
      image: "https://m.media-amazon.com/images/I/A1ZCvLJo3SL.jpg",
      genres: ["Art Rock", "Electronic", "Experimental"],
      description:
        "A complex and experimental album showcasing Radiohead's innovative songwriting.",
      link: "https://open.spotify.com/album/1HrMmB5useeZ0F5lHrMvl0",
    },
    {
      id: 9,
      title: "The Raven That Refused to Sing",
      artist: "Steven Wilson",
      year: "2013",
      image: "https://m.media-amazon.com/images/I/81VccXWpSiL.jpg",
      genres: ["Progressive Rock", "Art Rock", "Jazz Fusion"],
      description:
        "A masterful tribute to classic progressive rock with modern production and haunting storytelling.",
      link: "https://open.spotify.com/album/4yTnOKoF8yM0BmXXzMSP1r",
    },
    {
      id: 10,
      title: "Koi No Yokan",
      artist: "Deftones",
      year: "2012",
      image: "https://m.media-amazon.com/images/I/715XVEN+MpL.jpg",
      genres: ["Alternative Metal", "Shoegaze", "Post-Metal"],
      description:
        "A perfect blend of heaviness and atmosphere, showcasing Deftones' signature ethereal sound.",
      link: "https://open.spotify.com/album/1RXB4EaX7pwQfJN1TOSZ6Z",
    },
    {
      id: 11,
      title: "Dummy",
      artist: "Portishead",
      year: "1994",
      image: "https://m.media-amazon.com/images/I/71Cdc9-SPjL.jpg",
      genres: ["Trip Hop", "Electronic", "Experimental"],
      description:
        "A groundbreaking trip-hop album that defined the Bristol sound.",
      link: "https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno",
    },
    {
      id: 12,
      title: "Meteora",
      artist: "Linkin Park",
      year: "2003",
      image: "https://m.media-amazon.com/images/I/61UqF7-AtEL.jpg",
      genres: ["Nu Metal", "Alternative Rock", "Rap Rock"],
      description:
        "A defining album of the nu-metal era with powerful vocals and innovative production.",
      link: "https://open.spotify.com/album/0f7R0jf0pcTb6K6IVVPcMD",
    },
    {
      id: 13,
      title: "Diamond Eyes",
      artist: "Deftones",
      year: "2010",
      image: "https://m.media-amazon.com/images/I/71VizSg+yCL.jpg",
      genres: ["Alternative Metal", "Post-Metal", "Shoegaze"],
      description:
        "A triumphant return showcasing Deftones' ability to balance aggression with melody.",
      link: "https://open.spotify.com/album/3nZxzKCuCwR28d8IrDhC1R",
    },
    {
      id: 14,
      title: "In the Court of the Crimson King",
      artist: "King Crimson",
      year: "1969",
      image: "https://m.media-amazon.com/images/I/91qM849MXuL.jpg",
      genres: ["Progressive Rock", "Art Rock", "Jazz Fusion"],
      description:
        "A foundational progressive rock album that changed the landscape of music.",
      link: "https://open.spotify.com/album/6tVg2Wl9hVKMpHYcAl2V2M",
    },
    {
      id: 15,
      title: "A Love Supreme",
      artist: "John Coltrane",
      year: "1965",
      image: "https://m.media-amazon.com/images/I/71bwg4oSPuL.jpg",
      genres: ["Jazz", "Spiritual Jazz", "Avant-Garde"],
      description:
        "A spiritual and musical masterpiece that transcends traditional jazz conventions.",
      link: "https://open.spotify.com/album/7Eoz7hJvaX1eFkbpQxC5PA",
    },
    {
      id: 16,
      title: "Either/Or",
      artist: "Elliott Smith",
      year: "1997",
      image: "https://m.media-amazon.com/images/I/711gYGRv0ML.jpg",
      genres: ["Indie Folk", "Lo-Fi", "Alternative"],
      description:
        "An intimate and raw collection of songs showcasing Smith's songwriting genius.",
      link: "https://open.spotify.com/album/1Od4S26RB37khls09dsUxL",
    },
    {
      id: 17,
      title: "Hail to the Thief",
      artist: "Radiohead",
      year: "2003",
      image: "https://m.media-amazon.com/images/I/B1TWaryiwdS.jpg",
      genres: ["Alternative Rock", "Electronic", "Art Rock"],
      description:
        "A politically charged album blending electronic and rock elements with experimental production.",
      link: "https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy",
    },
    {
      id: 18,
      title: "Flying Beagle",
      artist: "Hiromi Kikuchi",
      year: "1987",
      image: "https://m.media-amazon.com/images/I/718ISQq3vsL.jpg",
      genres: ["Jazz", "Avant-Garde", "World Fusion"],
      description:
        "An innovative fusion of Japanese and Western musical traditions.",
      link: "https://open.spotify.com/album/5QZwqXZFVE5WfXdYJ4Xitb",
    },
    {
      id: 19,
      title: "Turn On the Bright Lights",
      artist: "Interpol",
      year: "2002",
      image: "https://m.media-amazon.com/images/I/71nhuZPsS1L.jpg",
      genres: ["Post-Punk Revival", "Alternative Rock", "Indie Rock"],
      description:
        "A landmark post-punk revival album with dark atmospheres and driving rhythms.",
      link: "https://open.spotify.com/album/79deKef8Ez7RVLJ84zSxDk",
    },
    {
      id: 20,
      title: "Multitude",
      artist: "Stromae",
      year: "2022",
      image: "https://m.media-amazon.com/images/I/61t6LB061wL.jpg",
      genres: ["Electronic", "Pop", "World"],
      description:
        "A genre-defying album combining electronic music with global influences.",
      link: "https://open.spotify.com/album/3wixX4bCAWCmkgUxkALYDL",
    },
    {
      id: 21,
      title: "Souvlaki",
      artist: "Slowdive",
      year: "1993",
      image: "https://m.media-amazon.com/images/I/71vH6o1bfuL.jpg",
      genres: ["Shoegaze", "Dream Pop", "Alternative"],
      description:
        "A defining shoegaze album with ethereal soundscapes and dreamy vocals.",
      link: "https://open.spotify.com/album/53eHm1f3sFiSzWMaKOl98Z",
    },
    // ---- new additions (images/links TODO) ----
    {
      id: 22,
      title: "Love Deluxe",
      artist: "Sade",
      year: "1992",
      image:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ee65bbd54f993b5f01d5c511", // TODO
      genres: ["Sophisti-Pop", "Quiet Storm", "R&B Soul"],
      description:
        "Lush, slow-burning soul with immaculate production and Sade Adu's unmistakable restraint.",
      link: "https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG", // TODO
    },
    {
      id: 23,
      title: "Memo Rex Commander y el Corazón Atómico de la Vía Láctea",
      artist: "Zoé",
      year: "2006",
      image:
        "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b8e3472fbc48bce859650f9", // TODO
      genres: ["Latin Alternative", "Psychedelic Rock", "Indie Rock"],
      description:
        "A cosmic, psychedelic landmark of Mexican rock, full of swirling textures and anthemic hooks.",
      link: "https://open.spotify.com/album/1aHxOwnGJWLSB2KfiUPoZG", // TODO
    },
    {
      id: 24,
      title: "Diamond Life",
      artist: "Sade",
      year: "1984",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ad27e16c5f844ea1ad6797cd", // TODO
      genres: ["Sophisti-Pop", "Smooth Jazz", "Soul"],
      description:
        "A timeless debut that fused jazz, soul, and pop into something effortlessly cool.",
      link: "https://open.spotify.com/album/3JcNnjMVSKiNpqhErZarW0", // TODO
    },
    {
      id: 25,
      title: "Amores Perros (Original Score)",
      artist: "Gustavo Santaolalla",
      year: "2000",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020a76e5e5bd2defb60bea0e29", // TODO
      genres: ["Film Score", "Latin", "Ambient"],
      description:
        "Sparse, aching guitar-driven score that carries the raw emotional weight of the film.",
      link: "https://open.spotify.com/album/4ERQo3lv0nHNBZtJjW0doY", // TODO
    },
    {
      id: 26,
      title: "Eternal Blue",
      artist: "Spiritbox",
      year: "2021",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023e234c82f96fa4ded8e5ca47", // TODO
      genres: ["Metalcore", "Progressive Metal", "Alternative Metal"],
      description:
        "A dynamic debut balancing crushing heaviness with soaring, melodic vulnerability.",
      link: "https://open.spotify.com/album/4OXoBlapQygTdzAifJm8BL", // TODO
    },
    {
      id: 27,
      title: "Heroine",
      artist: "Thornhill",
      year: "2022",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022873ff3a8f09e0bd1ff8583e", // TODO
      genres: ["Alternative Metal", "Progressive Metalcore", "Art Rock"],
      description:
        "A cinematic, sultry take on modern metal with Hollywood-noir atmosphere.",
      link: "https://open.spotify.com/album/5v8sXBKPvCrUryqtmZ2r2U", // TODO
    },
    {
      id: 28,
      title: "Language",
      artist: "The Contortionist",
      year: "2014",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02aec7ceb3ef3463a46d95395a", // TODO
      genres: ["Progressive Metal", "Post-Rock", "Ambient"],
      description:
        "A meditative, atmospheric evolution of progressive metal with ethereal vocals and flowing structure.",
      link: "https://open.spotify.com/album/2w93WyKSLvPT2ywFLtfZHQ", // TODO
    },
    {
      id: 29,
      title: "Vila",
      artist: "Fabiano do Nascimento",
      year: "2026",
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0223faaf48f3cdc81b7c2d8930", // TODO
      genres: ["Brazilian Jazz", "Acoustic", "World"],
      description:
        "Intricate, warm Brazilian guitar work that feels both intimate and expansive.",
      link: "https://open.spotify.com/album/6irs8cDzSNLsy8UL0ZeAes", // TODO
    },
    {
      id: 30,
      title: "Croak Dream",
      artist: "Puma Blue",
      year: "2026", // TODO: verify release year
      image:
        "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0254e0d836cea0dc91df9448a1", // TODO
      genres: ["Alternative R&B", "Jazz", "Lo-Fi"],
      description:
        "Hushed, late-night melancholy with jazzy guitar and whispered, intimate vocals.",
      link: "https://open.spotify.com/album/6c3Xs0oDVFXrqVh56D50do", // TODO
    },
  ];

  // Format time for audio player
  const formatTime = (time: number) => {
    if (isNaN(time) || time === undefined) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Handle audio playback
  const togglePlay = (id: number, audioSrc: string) => {
    if (playingTrack === id) {
      if (audioRef.current?.paused) {
        audioRef.current
          .play()
          .catch((err) => console.error("Error playing audio:", err));
      } else {
        audioRef.current?.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      }

      setPlayingTrack(id);
      setProgress(0);
      setCurrentTime(0);
      setDuration(0);

      audioRef.current = new Audio(audioSrc);
      audioRef.current.volume = volume;

      audioRef.current.addEventListener("loadedmetadata", () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration || 0);
        }
      });

      audioRef.current.addEventListener("ended", () => {
        setPlayingTrack(null);
        setProgress(0);
        setCurrentTime(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      });

      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
        // If there's an error playing (common with placeholder files), we'll simulate playback
        simulatePlayback(id);
      });

      progressIntervalRef.current = setInterval(() => {
        if (audioRef.current) {
          const currentTime = audioRef.current.currentTime || 0;
          const duration = audioRef.current.duration || 0;
          if (!isNaN(currentTime) && !isNaN(duration) && duration > 0) {
            setCurrentTime(currentTime);
            setProgress((currentTime / duration) * 100);
          }
        }
      }, 1000);
    }
  };

  // Simulate playback for placeholder files
  const simulatePlayback = (id: number) => {
    // Find the track duration string (e.g., "3:42")
    const track = myMusic.find((t) => t.id === id);
    if (!track) return;

    // Parse the duration string to seconds
    const [minutes, seconds] = track.duration.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;
    setDuration(totalSeconds);

    let elapsed = 0;
    progressIntervalRef.current = setInterval(() => {
      elapsed += 1;
      if (elapsed >= totalSeconds) {
        setPlayingTrack(null);
        setProgress(0);
        setCurrentTime(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
        return;
      }

      setCurrentTime(elapsed);
      setProgress((elapsed / totalSeconds) * 100);
    }, 1000);
  };

  // Handle progress bar change
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number.parseFloat(e.target.value);
    if (isNaN(newProgress)) return;

    setProgress(newProgress);

    if (
      audioRef.current &&
      !isNaN(audioRef.current.duration) &&
      audioRef.current.duration > 0
    ) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value);
    if (isNaN(newVolume)) return;

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24">
      <audio ref={audioRef} />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest text-zinc-500 mb-4">
              SOUNDS
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              Music
            </h1>
          </div>
        </motion.div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-white/10 rounded-full p-1">
            {/* <button */}
            {/*   onClick={() => setActiveTab("created")} */}
            {/*   className={`px-6 py-2 text-sm rounded-full transition-colors duration-300 ${ */}
            {/*     activeTab === "created" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white" */}
            {/*   }`} */}
            {/* > */}
            {/*   My Compositions */}
            {/* </button> */}
            <button
              onClick={() => setActiveTab("listening")}
              className={`px-6 py-2 text-sm rounded-full transition-colors duration-300 ${
                activeTab === "listening"
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              My Listening
            </button>
          </div>
        </div>

        {activeTab === "created" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <p className="text-zinc-400 leading-relaxed text-center">
                This is a collection of some of my original compositions and
                performances I've done. I write a variety of styles from
                orchestral to rock to electronic music. My main intruments are
                Piano, Guitar, and Trumpet.
              </p>
            </div>

            <div className="space-y-12">
              {myMusic.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => togglePlay(track.id, track.audioSrc)}
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 hover:bg-purple-500/20 transition-colors duration-300 mr-6 flex-shrink-0"
                    >
                      {playingTrack === track.id &&
                      !audioRef.current?.paused ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    <div>
                      <h3 className="text-xl font-light">{track.title}</h3>
                      <p className="text-sm text-zinc-500">
                        {track.instrument} • {track.year}
                      </p>
                    </div>
                  </div>

                  {/* Audio Player Controls */}
                  {playingTrack === track.id && (
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-zinc-500 w-10">
                          {formatTime(currentTime)}
                        </span>
                        <div className="flex-1">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress.toString()}
                            onChange={handleProgressChange}
                            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                          />
                        </div>
                        <span className="text-xs text-zinc-500 w-10">
                          {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button
                          onClick={toggleMute}
                          className="text-zinc-400 hover:text-white"
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </button>
                        <div className="w-24">
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume.toString()}
                            onChange={handleVolumeChange}
                            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Track Description */}
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <h4 className="text-sm text-purple-400 mb-2">
                      About this composition
                    </h4>
                    <p
                      style={{ whiteSpace: "pre-line" }}
                      className="text-zinc-400 text-sm mb-4"
                    >
                      {track.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "listening" && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-light text-center mb-4">
                  Currently Listening
                </h2>
                <p className="text-zinc-400 leading-relaxed text-center">
                  Some of the albums I've been listening to lately. Though not
                  all the music I listen to, these are just some of my
                  favorites.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {listeningTo.map((album, index) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      href={album.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="aspect-square bg-zinc-900 mb-6 relative overflow-hidden rounded-lg">
                        <Image
                          src={album.image || "/placeholder.svg"}
                          alt={album.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-light group-hover:text-purple-300 transition-colors duration-300">
                        {album.title}
                      </h3>
                      <p className="text-zinc-400">{album.artist}</p>
                      <p className="text-zinc-500 text-sm">{album.year}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {album.genres.map((genre) => (
                            <span
                              key={genre}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-16 mb-12 max-w-3xl mx-auto">
                <h2 className="text-2xl font-light text-center mb-4">
                  Favorite Albums
                </h2>
                <p className="text-zinc-400 leading-relaxed text-center">
                  These are some of my favorite albums and I recommend anyone,
                  whether into music or not, listen to all of these at some
                  point.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommendations.map((album, index) => (
                  <Link key={album.id} href={album.link}>
                    <motion.div
                      key={album.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-32 h-32 shrink-0 bg-zinc-900 relative overflow-hidden rounded-lg">
                        <Image
                          src={album.image || "/placeholder.svg"}
                          alt={album.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-light group-hover:text-purple-300 transition-colors duration-300">
                          {album.title}
                        </h3>
                        <p className="text-zinc-400">{album.artist}</p>
                        <p className="text-zinc-500 text-sm mb-2">
                          {album.year}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {album.genres.map((genre) => (
                            <span
                              key={genre}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                        <p className="text-zinc-400 text-sm">
                          {album.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
