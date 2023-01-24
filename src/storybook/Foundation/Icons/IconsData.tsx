import React from "react";
import { Zap, ZapOff, ZoomIn, ZoomOut, YouTube, Xsquare, Xoctagon, Xcircle, Wind, WifiOff, Wifi, Watch, VolumeX, Volume2, Volume1, Volume, VoiceMail, VideoOff, Video, Users, UserX, UserPlus, UserMinus, UserCheck, User, UploadCloud, Upload, Unlock, Underline, Umbrella, Type, Twitter, Twitch, Tv, Truck, Triangle, TrendingUp, TrendingDown, Trello, Trash2, Trash, Tool, ToggleRight, ToggleLeft, ThumbsUp, ThumbsDown, Thermometer, Terminal, Target, Tag, Tablet, Table, Sunset, Sunrise, Sun, StopCircle, Star, Square, Speaker, Smile, Smartphone, Sliders, Slash, Slack, SkipForward, SkipBack, Sidebar, Shuffle, ShoppingCart, ShoppingBag, ShieldOff, Shield, Share2, Share, Settings, Server, Send, Search, Scissors, Save, Rss, RotateCw, RotateCcw, Rewind, Repeat, RefreshCw, RefreshCcw, Radio, Printer, Power, Pocket, PlusSquare, PlusCircle, Plus, PlayCircle, Play, PieChart, PhoneOutgoing, PhoneOff, PhoneMissed, PhoneIncoming, PhoneFowarded, X, PhoneCall, Phone, Percent, PenTool, PauseCircle, Pause, PaperClip, Package, Octagon, Navigation2, Navigation, Music, Move, MousePointer, MoreVertical, MoreHorizontal, Moon, Monitor, MinusSquare, MinusCircle, Minus, Minimize2, Minimize, MicOff, Mic, MessageSquare, MessageCircle, Menu, Meh, Maximize2, Maximize, MapPin, Map, Mail, Logout, LogIn, Lock, Loader, List, LinkedIn, Link2, Link, LifeBuoy, Layout, Layers, Key, Italic, ProductDelivery, Discount, Billing, ProductSuccessful, Campaign, Analytics, Store, Payment1, Theme, Transaction, BulkOrders, BulkProducts, AbandonedCart, Activities, AddProduct, Apps, Wallet, ReturnProduct, List1, Money, Rupee, Yen, Bitcoin, Dollar, Euro, Pound, Ruble, Session, Backspace, Checklist, DataVisualization, DragAndDrop, Drag, Exchange, Inventory, Newsletter, Hint, Event, OnlineStore, Logout1, OrderStatus, CartAdded, Tracking, WriteReview, Ticket, Bank, Report, Pin, Refund, Member, Barcode, Variants, Bug, Language, Categories, Connect, CardEdit, Embed, CardLock, Instagram, Info, Inbox, Image, Home, Hexagon, HelpCircle, Heart, HeadPhones, Hash, HardDrive, Grid, Globe, Gitlab, Github, GitPullRequest, GitMerge, GitCommit, GitBranch, Gift, Frown, Framer, FolderPlus, FolderMinus, Folder, Flag, Filter, Film, FileText, FilePlus, FileMinus, File, Figma, Feather, FastForward, Facebook, EyeOff, Eye, ExternalLink, Edit3, Edit2, Edit, Droplet, Dribble, DownloadCloud, Download, DollarSign, DivideSquare, DivideCircle, Divide, Disc, Delete, Database, Crosshair, Crop, CreditCard, Cpu, CornerUpRight, CornerUpLeft, CornerRightUp, CornerRightDown, CornerLeftUp, CornerLeftDown, CornerDownRight, CornerDownLeft, Copy, Compass, Command, Columns, Coffee, CodeSandBox, CodePen, Code, CloudSnow, CloudRain, CloudOff, CloudLightning, CloudDrizzle, Cloud, Clock, Clipboard, Circle, Chrome, ChevronsUp, ChevronsRight, ChevronLeft, ChevronsDown, ChevronUp, CheckSquare, CheckCircle, Check, Cast, CameraOff, Camera, Calender, BriefCase, Box,ChevronDown } from "./Icons";

export const IconsComponent = ({ ...rest }) => {
    const Icons = {
        PureIcons: [
            {
                icon: <ZoomIn {...rest} />,
                name: "ZoomIn",
                data: ["ZoomIn", "Lens", "Zoo", "zoom"]
            },
            {
                icon: <ZoomOut {...rest} />,
                name: "ZoomOut",
                data: ["ZoomOut", "out", "Zooout"]
            },
            {
                icon: <ZapOff {...rest} />,
                name: "ZapOff",
                data: ["ZapOff"]
            },
            {
                icon: <Zap {...rest} />,
                name: "Zap",
                data: ["Zap"]
            },
            {
                icon: <Upload {...rest} />,
                name: "Upload",
                data: ["Upload", "Up"]
            },
            {
                icon: <Layers {...rest} />,
                name: "Layers",
                data: ["Layers"]
            },
            {
                icon: <Key {...rest} />,
                name: "Key",
                data: ["Key"]
            },
            {
                icon: <YouTube {...rest} />,
                name: "YouTube",
                data: ["YouTube", "videoplayer"]
            },
            {
                icon: <Xsquare {...rest} />,
                name: "Xsquare",
                data: ["Xsquare"]
            },
            {
                icon: <Xoctagon {...rest} />,
                name: "Xoctagon",
                data: ["Xoctagon"]
            },
            {
                icon: <Xcircle {...rest} />,
                name: "Xcircle",
                data: ["Xcircle"]
            },
            {
                icon: <X {...rest} />,
                name: "X",
                data: ["X"]
            },
            {
                icon: <Wind {...rest} />,
                name: "Wind",
                data: ["Wind"]
            },
            {
                icon: <WifiOff {...rest} />,
                name: "WifiOff",
                data: ["WifiOff"]
            },
            {
                icon: <Wifi {...rest} />,
                name: "Wifi",
                data: ["Wifi"]
            },
            {
                icon: <Watch {...rest} />,
                name: "Watch",
                data: ["Watch"]
            },
            {
                icon: <VolumeX {...rest} />,
                name: "VolumeX",
                data: ["VolumeX", "volume"]
            },
            {
                icon: <Volume2 {...rest} />,
                name: "Volume2",
                data: ["Volume2", "Volume"]
            },
            {
                icon: <Volume1 {...rest} />,
                name: "Volume1",
                data: ["Volume1", "Volume"]
            },
            {
                icon: <Volume {...rest} />,
                name: "Volume",
                data: ["Volume1"]
            },
            {
                icon: <VoiceMail {...rest} />,
                name: "VoiceMail",
                data: ["VoiceMail"]
            },
            {
                icon: <VideoOff {...rest} />,
                name: "VideoOff",
                data: ["VideoOff"]
            },
            {
                icon: <Video {...rest} />,
                name: "Video",
                data: ["Video"]
            },
            {
                icon: <Users {...rest} />,
                name: "Users",
                data: ["Users"]
            },
            {
                icon: <UserX {...rest} />,
                name: "UserX",
                data: ["UserX"]
            },
            {
                icon: <UserPlus {...rest} />,
                name: "UserPlus",
                data: ["UserPlus"]
            },
            {
                icon: <UserMinus {...rest} />,
                name: "UserMinus",
                data: ["UserMinus"]
            },
            {
                icon: <UserCheck {...rest} />,
                name: "UserCheck",
                data: ["UserCheck"]
            },
            {
                icon: <User {...rest} />,
                name: "User",
                data: ["User"]
            },
            {
                icon: <UploadCloud {...rest} />,
                name: "UploadCloud",
                data: ["UploadCloud"]
            },
            {
                icon: <Unlock {...rest} />,
                name: "Unlock",
                data: ["Unlock"]
            },
            {
                icon: <Underline {...rest} />,
                name: "Underline",
                data: ["Underline"]
            },
            {
                icon: <Umbrella {...rest} />,
                name: "Umbrella",
                data: ["Umbrella"]
            },
            {
                icon: <Type {...rest} />,
                name: "Type",
                data: ["Type"]
            },
            {
                icon: <Twitter {...rest} />,
                name: "Twitter",
                data: ["Twitter"]
            },
            {
                icon: <Twitch {...rest} />,
                name: "Twitch",
                data: ["Twitch"]
            },
            {
                icon: <Tv {...rest} />,
                name: "Tv",
                data: ["tv"]
            },
            {
                icon: <Truck {...rest} />,
                name: "Truck",
                data: ["Truck"]
            },
            {
                icon: <Triangle {...rest} />,
                name: "Triangle",
                data: ["Triangle"]
            },
            {
                icon: <TrendingUp {...rest} />,
                name: "TrendingUp",
                data: ["TrendingUp"]
            },
            {
                icon: <TrendingDown {...rest} />,
                name: "TrendingDown",
                data: ['TrendingDown']
            },
            {
                icon: <Trello {...rest} />,
                name: "Trello",
                data: ["Trello"]
            },
            {
                icon: <Trash2 {...rest} />,
                name: "Trash2",
                data: ["Trash2"]
            },
            {
                icon: <Trash {...rest} />,
                name: "Trash",
                data: ["Trash"]
            },
            {
                icon: <Tool {...rest} />,
                name: "Tool",
                data: ["Tool"]
            },

            {
                icon: <ToggleRight {...rest} />,
                name: "ToggleRight",
                data: ["ToggleRight"]
            },
            {
                icon: <ToggleLeft {...rest} />,
                name: "ToggleLeft",
                data: ["ToggleLeft"]
            },
            {
                icon: <ThumbsUp {...rest} />,
                name: "ThumbsUp",
                data: ["ThumbsUp"]
            },
            {
                icon: <ThumbsDown {...rest} />,
                name: "ThumbsDown",
                data: ["ThumbsDown"]
            },
            {
                icon: <Thermometer {...rest} />,
                name: "Thermometer",
                data: ["Thermometer"]
            },
            {
                icon: <Terminal {...rest} />,
                name: "Terminal",
                data: ["Terminal"]
            },
            {
                icon: <Target {...rest} />,
                name: "Target",
                data: ["Target"]
            },
            {
                icon: <Tag {...rest} />,
                name: "Tag",
                data: ["Tag"]
            },
            {
                icon: <Tablet {...rest} />,
                name: "Tablet",
                data: ["Tablet"]
            },
            {
                icon: <Table {...rest} />,
                name: "Table",
                data: ["Table"]
            },
            {
                icon: <Sunset {...rest} />,
                name: "Sunset",
                data: ["Sunset"]
            },
            {
                icon: <Sunrise {...rest} />,
                name: "Sunrise",
                data: ["Sunrise"]
            },
            {
                icon: <Sun {...rest} />,
                name: "Sun",
                data: ["Sun"]
            },
            {
                icon: <StopCircle {...rest} />,
                name: "StopCircle",
                data: ["StopCircle"]
            },
            {
                icon: <Star {...rest} />,
                name: "Star",
                data: ["Star"]
            },
            {
                icon: <Square {...rest} />,
                name: "Square",
                data: ["Square"]
            },
            {
                icon: <Speaker {...rest} />,
                name: "Speaker",
                data: ["Speaker"]
            },
            {
                icon: <Smartphone {...rest} />,
                name: "Smartphone",
                data: ["Smartphone"]
            },
            {
                icon: <Sliders {...rest} />,
                name: "Sliders",
                data: ["Sliders"]
            },
            {
                icon: <Smile {...rest} />,
                name: "Smile",
                data: ["Smile"]
            },
            {
                icon: <Slash {...rest} />,
                name: "Slash",
                data: ["Slash"]
            },
            {
                icon: <Slack {...rest} />,
                name: "Slack",
                data: ["Slack"]
            },
            {
                icon: <SkipForward {...rest} />,
                name: "SkipForward",
                data: ["SkipForward"]
            },
            {
                icon: <SkipBack {...rest} />,
                name: "SkipBack",
                data: ["SkipBack"]
            },
            {
                icon: <Sidebar {...rest} />,
                name: "Sidebar",
                data: ["Sidebar"]
            },
            {
                icon: <Shuffle {...rest} />,
                name: "Shuffle",
                data: ["Shuffle"]
            },
            {
                icon: <ShoppingCart {...rest} />,
                name: "ShoppingCart",
                data: ["ShoppingCart"]
            },
            {
                icon: <ShoppingBag {...rest} />,
                name: "ShoppingBag",
                data: ["ShoppingBag"]
            },
            {
                icon: <ShieldOff {...rest} />,
                name: "ShieldOff",
                data: ["ShieldOff"]
            },
            {
                icon: <Shield {...rest} />,
                name: "Shield",
                data: ["Shield"]
            },
            {
                icon: <Share2 {...rest} />,
                name: "Share2",
                data: ["Share2"]
            },
            {
                icon: <Share {...rest} />,
                name: "Share",
                data: ["Share"]
            },
            {
                icon: <Settings {...rest} />,
                name: "Settings",
                data: ["Settings"]
            },
            {
                icon: <Server {...rest} />,
                name: "Server",
                data: ["Server"]
            },
            {
                icon: <Send {...rest} />,
                name: "Send",
                data: ["Send"]
            },
            {
                icon: <Search {...rest} />,
                name: "Search",
                data: ["Search"]
            },
            {
                icon: <Scissors {...rest} />,
                name: "Scissors",
                data: ["Scissors"]
            },
            {
                icon: <Save {...rest} />,
                name: "Save",
                data: ["Save"]
            },
            {
                icon: <Rss {...rest} />,
                name: "Rss",
                data: ["Rss"]
            },
            {
                icon: <RotateCw {...rest} />,
                name: "RotateCw",
                data: ["RotateCw"]
            },
            {
                icon: <RotateCcw {...rest} />,
                name: "RotateCcw",
                data: ["RotateCcw"]
            },
            {
                icon: <Rewind {...rest} />,
                name: "Rewind",
                data: ["Rewind"]
            },
            {
                icon: <Repeat {...rest} />,
                name: "Repeat",
                data: ["Repeat"]
            },
            {
                icon: <RefreshCw {...rest} />,
                name: "RefreshCw",
                data: ["RefreshCw"]
            },
            {
                icon: <RefreshCcw {...rest} />,
                name: "RefreshCcw",
                data: ["RefreshCcw"]
            },
            {
                icon: <Radio {...rest} />,
                name: "Radio",
                data: ["Radio"]
            },
            {
                icon: <Printer {...rest} />,
                name: "Printer",
                data: ["Printer"]
            },
            {
                icon: <Power {...rest} />,
                name: "Power",
                data: ["Power"]
            },
            {
                icon: <Pocket {...rest} />,
                name: "Pocket",
                data: ["Pocket"]
            },
            {
                icon: <PlusSquare {...rest} />,
                name: "PlusSquare",
                data: ["PlusSquare"]
            },
            {
                icon: <PlusCircle {...rest} />,
                name: "PlusCircle",
                data: ["PlusCircle"]
            },
            {
                icon: <PlayCircle {...rest} />,
                name: "PlayCircle",
                data: ["PlayCircle"]
            },
            {
                icon: <Play {...rest} />,
                name: "Play",
                data: ["Play"]
            },
            {
                icon: <PieChart {...rest} />,
                name: "PieChart",
                data: ["PieChart"]
            },
            {
                icon: <PhoneOutgoing {...rest} />,
                name: "PhoneOutgoing",
                data: ["PhoneOutgoing"]
            },
            {
                icon: <PhoneOff {...rest} />,
                name: "PhoneOff",
                data: ["PhoneOff"]
            },
            {
                icon: <PhoneMissed {...rest} />,
                name: "PhoneMissed",
                data: ["PhoneMissed"]
            },
            {
                icon: <PhoneIncoming {...rest} />,
                name: "PhoneIncoming",
                data: ["PhoneIncoming"]
            },
            {
                icon: <PhoneFowarded {...rest} />,
                name: "PhoneFowarded",
                data: ["PhoneFowarded"]
            },
            {
                icon: <PhoneCall {...rest} />,
                name: "PhoneCall",
                data: ["PhoneCall"]
            },
            {
                icon: <Phone {...rest} />,
                name: "Phone",
                data: ["Phone"]
            },
            {
                icon: <Percent {...rest} />,
                name: "Percent",
                data: ["Percent"]
            },
            {
                icon: <PenTool {...rest} />,
                name: "PenTool",
                data: ["PenTool"]
            },
            {
                icon: <PauseCircle {...rest} />,
                name: "PauseCircle",
                data: ["PauseCircle"]
            },
            {
                icon: <Pause {...rest} />,
                name: "Pause",
                data: ["Pause"]
            },
            {
                icon: <PhoneFowarded {...rest} />,
                name: "PhoneFowarded",
                data: ["PhoneFowarded"]
            },
            {
                icon: <PaperClip {...rest} />,
                name: "PaperClip",
                data: ["PaperClip"]
            },
            {
                icon: <Package {...rest} />,
                name: "Package",
                data: ["Package"]
            },
            {
                icon: <Octagon {...rest} />,
                name: "Octagon",
                data: ["Octagon"]
            },
            {
                icon: <Navigation2 {...rest} />,
                name: "Navigation2",
                data: ["Navigation2"]
            },
            {
                icon: <Navigation {...rest} />,
                name: "Navigation",
                data: ["Navigation"]
            },
            {
                icon: <Music {...rest} />,
                name: "Music",
                data: ["Music"]
            },
            {
                icon: <Move {...rest} />,
                name: "Move",
                data: ["Move"]
            },
            {
                icon: <MousePointer {...rest} />,
                name: "MousePointer",
                data: ["MousePointer"]
            },
            {
                icon: <MoreVertical {...rest} />,
                name: "MoreVertical",
                data: ["MoreVertical"]
            },
            {
                icon: <MoreHorizontal {...rest} />,
                name: "MoreHorizontal",
                data: ["MoreHorizontal"]
            },
            {
                icon: <Moon {...rest} />,
                name: "Moon",
                data: ["Moon"]
            },
            {
                icon: <Monitor {...rest} />,
                name: "Monitor",
                data: ["Monitor"]
            },
            {
                icon: <MinusSquare {...rest} />,
                name: "MinusSquare",
                data: ["MinusSquare"]
            },
            {
                icon: <MinusCircle {...rest} />,
                name: "MinusCircle",
                data: ["MinusCircle"]
            },
            {
                icon: <Minus {...rest} />,
                name: "Minus",
                data: ["Minus"]
            },
            {
                icon: <Minimize2 {...rest} />,
                name: "Minimize2",
                data: ["Minimize2"]
            },
            {
                icon: <Minimize {...rest} />,
                name: "Minimize",
                data: ["Minimize"]
            },
            {
                icon: <MicOff {...rest} />,
                name: "MicOff",
                data: ["MicOff"]
            },
            {
                icon: <Mic {...rest} />,
                name: "Mic",
                data: ["Mic"]
            },
            {
                icon: <MessageSquare {...rest} />,
                name: "MessageSquare",
                data: ["MessageSquare"]
            },
            {
                icon: <MessageCircle {...rest} />,
                name: "MessageCircle",
                data: ["MessageCircle"]
            },
            {
                icon: <Menu {...rest} />,
                name: "Menu",
                data: ["Menu"]
            },
            {
                icon: <Meh {...rest} />,
                name: "Meh",
                data: ["Meh"]
            },
            {
                icon: <Maximize2 {...rest} />,
                name: "Maximize2",
                data: ["Maximize2"]
            },
            {
                icon: <Maximize {...rest} />,
                name: "Maximize",
                data: ["Maximize"]
            },
            {
                icon: <MapPin {...rest} />,
                name: "MapPin",
                data: ["MapPin"]
            },
            {
                icon: <Map {...rest} />,
                name: "Map",
                data: ["Map"]
            },
            {
                icon: <Mail {...rest} />,
                name: "Mail",
                data: ["Mail"]
            },
            {
                icon: <Logout {...rest} />,
                name: "Logout",
                data: ["Logout"]
            },
            {
                icon: <LogIn {...rest} />,
                name: "LogIn",
                data: ["LogIn"]
            },
            {
                icon: <Lock {...rest} />,
                name: "Lock",
                data: ["Lock"]
            },
            {
                icon: <Loader {...rest} />,
                name: "Loader",
                data: ["Loader"]
            },
            {
                icon: <List {...rest} />,
                name: "List",
                data: ["List"]
            },
            {
                icon: <LinkedIn {...rest} />,
                name: "LinkedIn",
                data: ["LinkedIn"]
            },
            {
                icon: <Link2 {...rest} />,
                name: "Link2",
                data: ["Link2"]
            },
            {
                icon: <Link {...rest} />,
                name: "Link",
                data: ["Link"]
            },
            {
                icon: <LifeBuoy {...rest} />,
                name: "LifeBuoy",
                data: ["LifeBuoy"]
            },
            {
                icon: <Layout {...rest} />,
                name: "Layout",
                data: ["Layout"]
            },
            {
                icon: <Italic {...rest} />,
                name: "Italic",
                data: ["Italic"]
            },
            {
                icon: <Instagram {...rest} />,
                name: "Instagram",
                data: ["Instagram"]
            },
            {
                icon: <Info {...rest} />,
                name: "Info",
                data: ["Info"]
            },
            {
                icon: <Inbox {...rest} />,
                name: "Inbox",
                data: ["Inbox"]
            },
            {
                icon: <Image {...rest} />,
                name: "Image",
                data: ["Image"]
            },
            {
                icon: <Home {...rest} />,
                name: "Home",
                data: ["Home"]
            },
            {
                icon: <Hexagon {...rest} />,
                name: "Hexagon",
                data: ["Hexagon"]
            },
            {
                icon: <HelpCircle {...rest} />,
                name: "HelpCircle",
                data: ["HelpCircle"]
            },
            {
                icon: <Heart {...rest} />,
                name: "Heart",
                data: ["Heart"]
            },
            {
                icon: <HeadPhones {...rest} />,
                name: "HeadPhones",
                data: ["HeadPhones"]
            },
            {
                icon: <Hash {...rest} />,
                name: "Hash",
                data: ["Hash"]
            },
            {
                icon: <HardDrive {...rest} />,
                name: "HardDrive",
                data: ["HardDrive"]
            },
            {
                icon: <Grid {...rest} />,
                name: "Grid",
                data: ["Grid"]
            },
            {
                icon: <Globe {...rest} />,
                name: "Globe",
                data: ["Globe"]
            },
            {
                icon: <Gitlab {...rest} />,
                name: "Gitlab",
                data: ["Gitlab"]
            },
            {
                icon: <Github {...rest} />,
                name: "Github",
                data: ["Github"]
            },
            {
                icon: <GitPullRequest {...rest} />,
                name: "GitPullRequest",
                data: ["GitPullRequest"]
            },
            {
                icon: <GitMerge {...rest} />,
                name: "GitMerge",
                data: ["GitMerge"]
            },
            {
                icon: <GitCommit {...rest} />,
                name: "GitCommit",
                data: ["GitCommit"]
            },
            {
                icon: <GitBranch {...rest} />,
                name: "GitBranch",
                data: ["GitBranch"]
            },
            {
                icon: <Gift {...rest} />,
                name: "Gift",
                data: ["Gift"]
            },
            {
                icon: <Frown {...rest} />,
                name: "Frown",
                data: ["Frown"]
            },
            {
                icon: <Framer {...rest} />,
                name: "Framer",
                data: ["Framer"]
            },
            {
                icon: <FolderPlus {...rest} />,
                name: "FolderPlus",
                data: ["FolderPlus"]
            },
            {
                icon: <FolderMinus {...rest} />,
                name: "FolderMinus",
                data: ["FolderMinus"]
            },
            {
                icon: <Folder {...rest} />,
                name: "Folder",
                data: ["Folder"]
            },
            {
                icon: <Flag {...rest} />,
                name: "Flag",
                data: ["Flag"]
            },
            {
                icon: <Filter {...rest} />,
                name: "Filter",
                data: ["Filter"]
            },
            {
                icon: <Film {...rest} />,
                name: "Film",
                data: ["Film"]
            },
            {
                icon: <FileText {...rest} />,
                name: "FileText",
                data: ["FileText"]
            },
            {
                icon: <FilePlus {...rest} />,
                name: "FilePlus",
                data: ["FilePlus"]
            },
            {
                icon: <FileMinus {...rest} />,
                name: "FileMinus",
                data: ["FileMinus"]
            },
            {
                icon: <File {...rest} />,
                name: "File",
                data: ["File"]
            },
            {
                icon: <Figma {...rest} />,
                name: "Figma",
                data: ["Figma"]
            },
            {
                icon: <Feather {...rest} />,
                name: "Feather",
                data: ["Feather"]
            },
            {
                icon: <FastForward {...rest} />,
                name: "FastForward",
                data: ["FastForward"]
            },
            {
                icon: <Facebook {...rest} />,
                name: "Facebook",
                data: ["Facebook"]
            },
            {
                icon: <EyeOff {...rest} />,
                name: "EyeOff",
                data: ["EyeOff"]
            },
            {
                icon: <Eye {...rest} />,
                name: "Eye",
                data: ["Eye"]
            },
            {
                icon: <ExternalLink {...rest} />,
                name: "ExternalLink",
                data: ["ExternalLink"]
            },
            {
                icon: <Edit3 {...rest} />,
                name: "Edit3",
                data: ["Edit3"]
            },
            {
                icon: <Edit2 {...rest} />,
                name: "Edit2",
                data: ["Edit2"]
            },
            {
                icon: <Edit {...rest} />,
                name: "Edit",
                data: ["Edit"]
            },
            {
                icon: <Droplet {...rest} />,
                name: "Droplet",
                data: ["Droplet"]
            },
            {
                icon: <Dribble {...rest} />,
                name: "Dribble",
                data: ["Dribble"]
            },
            {
                icon: <DownloadCloud {...rest} />,
                name: "DownloadClou",
                data: ["DownloadClou"]
            },
            {
                icon: <Download {...rest} />,
                name: "Download",
                data: ["Download"]
            },
            {
                icon: <DollarSign {...rest} />,
                name: "DollarSign",
                data: ["DollarSign"]
            },
            {
                icon: <DivideSquare {...rest} />,
                name: "DivideSquare",
                data: ["DivideSquare"]
            },
            {
                icon: <DivideCircle {...rest} />,
                name: "DivideCircle",
                data: ["DivideCircle"]
            },
            {
                icon: <Divide {...rest} />,
                name: "Divide",
                data: ["Divide"]
            },
            {
                icon: <Disc {...rest} />,
                name: "Disc",
                data: ["Disc"]
            },
            {
                icon: <Delete {...rest} />,
                name: "Delete",
                data: ["Delete"]
            },
            {
                icon: <Database {...rest} />,
                name: "Database",
                data: ["Database"]
            },
            {
                icon: <Crosshair {...rest} />,
                name: "Crosshair",
                data: ["Crosshair"]
            },
            {
                icon: <Crop {...rest} />,
                name: "Crop",
                data: ["Crop"]
            },
            {
                icon: <CreditCard {...rest} />,
                name: "CreditCard",
                data: ["CreditCard"]
            },
            {
                icon: <Cpu {...rest} />,
                name: "Cpu",
                data: ["Cpu"]
            },
            {
                icon: <CornerUpRight {...rest} />,
                name: "CornerUpRight",
                data: ["CornerUpRight"]
            },
            {
                icon: <CornerUpLeft {...rest} />,
                name: "CornerUpLeft",
                data: ["CornerUpLeft"]
            },
            {
                icon: <CornerRightUp {...rest} />,
                name: "CornerRightUp",
                data: ["CornerRightUp"]
            },
            {
                icon: <CornerRightDown {...rest} />,
                name: "CornerRightDown",
                data: ["CornerRightDown"]
            },
            {
                icon: <CornerLeftUp {...rest} />,
                name: "CornerLeftUp",
                data: ["CornerLeftUp"]
            },
            {
                icon: <CornerLeftDown {...rest} />,
                name: "CornerLeftDown",
                data: ["CornerLeftDown"]
            },
            {
                icon: <CornerDownRight {...rest} />,
                name: "CornerDownRight",
                data: ["CornerDownRight"]
            },
            {
                icon: <CornerDownLeft {...rest} />,
                name: "CornerDownLeft",
                data: ["CornerDownLeft"]
            },
            {
                icon: <Copy {...rest} />,
                name: "Copy",
                data: ["Copy"]
            },
            {
                icon: <Compass {...rest} />,
                name: "Compass",
                data: ["Compass"]
            },
            {
                icon: <Command {...rest} />,
                name: "Command",
                data: ["Command"]
            },
            {
                icon: <Columns {...rest} />,
                name: "Columns",
                data: ["Columns"]
            },
            {
                icon: <Coffee {...rest} />,
                name: "Coffee",
                data: ["Coffee"]
            },
            {
                icon: <CodeSandBox {...rest} />,
                name: "CodeSandBox",
                data: ["CodeSandBox"]
            },
            {
                icon: <CodePen {...rest} />,
                name: "CodePen",
                data: ["CodePen"]
            },
            {
                icon: <Code {...rest} />,
                name: "Code",
                data: ["Code"]
            },
            {
                icon: <CloudSnow {...rest} />,
                name: "CloudSnow",
                data: ["CloudSnow"]
            },
            {
                icon: <CloudRain {...rest} />,
                name: "CloudRain",
                data: ["CloudRain"]
            },
            {
                icon: <CloudOff {...rest} />,
                name: "CloudOff",
                data: ["CloudOff"]
            },
            {
                icon: <CloudLightning {...rest} />,
                name: "CloudLightning",
                data: ["CloudLightning"]
            },
            {
                icon: <CloudDrizzle {...rest} />,
                name: "CloudDrizzle",
                data: ["CloudDrizzle"]
            },
            {
                icon: <Cloud {...rest} />,
                name: "Cloud",
                data: ["Cloud"]
            },
            {
                icon: <Clock {...rest} />,
                name: "Clock",
                data: ["Clock"]
            },
            {
                icon: <Clipboard {...rest} />,
                name: "Clipboard",
                data: ["Clipboard"]
            },
            {
                icon: <Circle {...rest} />,
                name: "Circle",
                data: ["Circle"]
            },
            {
                icon: <Chrome {...rest} />,
                name: "Chrome",
                data: ["Chrome"]
            },
            {
                icon: <ChevronsUp {...rest} />,
                name: "ChevronsUp",
                data: ["ChevronsUp","Arrowup"]
            },
            {
                icon: <ChevronsRight {...rest} />,
                name: "ChevronsRight",
                data: ["ChevronsRight","ArrowRight"]
            },
            {
                icon: <ChevronLeft {...rest} />,
                name: "ChevronLeft",
                data: ["ChevronLeft","ArrowLeft"]
            },
            {
                icon: <ChevronsDown {...rest} />,
                name: "ChevronsDown",
                data: ["ChevronsDown","ArrowDown"]
            },
            {
                icon: <ChevronUp {...rest} />,
                name: "ChevronUp",
                data: ["ChevronUp","Uparrow"]
            },
            {
                icon: <ChevronDown {...rest} />,
                name: "ChevronDown",
                data: ["ChevronDown","DownArrow"]
            },
            {
                icon: <CheckSquare {...rest} />,
                name: "CheckSquare",
                data: ["CheckSquare"]
            },
            {
                icon: <CheckCircle {...rest} />,
                name: "CheckCircle",
                data: ["CheckCircle"]
            },
            {
                icon: <Check {...rest} />,
                name: "Check",
                data: ["Check"]
            },
            {
                icon: <Cast {...rest} />,
                name: "Cast",
                data: ["Cast"]
            },
            {
                icon: <CameraOff {...rest} />,
                name: "CameraOff",
                data: ["CameraOff"]
            },
            {
                icon: <Camera {...rest} />,
                name: "Camera",
                data: ["Camera"]
            },
            {
                icon: <Calender {...rest} />,
                name: "Calender",
                data: ["Calender"]
            },
            {
                icon: <BriefCase {...rest} />,
                name: "BriefCase",
                data: ["BriefCase"]
            },
            {
                icon: <Box {...rest} />,
                name: "Box",
                data: ["Box"]
            },
        ],
        CustomIcons: [
            {
                icon: <ProductDelivery {...rest} />,
                name: "ProductDelivery",
                data: ["ProductDelivery"]
            },
            {
                icon: <Discount {...rest} />,
                name: "Discount",
                data: ["Discount"]
            },
            {
                icon: <Billing {...rest} />,
                name: "Billing",
                data: ["Billing"]
            },
            {
                icon: <ProductSuccessful {...rest} />,
                name: "ProductSuccessful",
                data: ["ProductSuccessful"]
            },
            {
                icon: <Campaign {...rest} />,
                name: "Campaign",
                data: ["Campaign"]
            },
            {
                icon: <Analytics {...rest} />,
                name: "Analytics",
                data: ["Analytics"]
            },
            {
                icon: <Store {...rest} />,
                name: "Store",
                data: ["Store"]
            },
            {
                icon: <Payment1 {...rest} />,
                name: "Payment1",
                data: ["Payment1"]
            },
            {
                icon: <Theme {...rest} />,
                name: "Theme",
                data: ["Theme"]
            },
            {
                icon: <Transaction {...rest} />,
                name: "Transaction",
                data: ["Transaction"]
            },
            {
                icon: <BulkOrders {...rest} />,
                name: "BulkOrders",
                data: ["BulkOrders"]
            },
            {
                icon: <BulkProducts {...rest} />,
                name: "BulkProducts",
                data: ["BulkProducts"]
            },
            {
                icon: <AbandonedCart {...rest} />,
                name: "AbandonedCart",
                data: ["AbandonedCart"]
            },
            {
                icon: <Activities {...rest} />,
                name: "Activities",
                data: ["Activities"]
            },
            {
                icon: <AddProduct {...rest} />,
                name: "AddProduct",
                data: ["AddProduct"]
            },
            {
                icon: <Apps {...rest} />,
                name: "Apps",
                data: ["Apps"]
            },
            {
                icon: <Wallet {...rest} />,
                name: "Wallet",
                data: ["Wallet"]
            },
            {
                icon: <ReturnProduct {...rest} />,
                name: "ReturnProduct",
                data: ["ReturnProduct"]
            },
            {
                icon: <Payment1 {...rest} />,
                name: "Payment1",
                data: ["Payment1"]
            },
            {
                icon: <List1 {...rest} />,
                name: "List1",
                data: ["List1"]
            },
            {
                icon: <Money {...rest} />,
                name: "Money",
                data: ["Money"]
            },
            {
                icon: <Rupee {...rest} />,
                name: "Rupee",
                data: ["Rupee"]
            },
            {
                icon: <Yen {...rest} />,
                name: "Yen",
                data: ["Yen"]
            },
            {
                icon: <Bitcoin {...rest} />,
                name: "Bitcoin",
                data: ["Bitcoin"]
            },
            {
                icon: <Dollar {...rest} />,
                name: "Dollar",
                data: ["Dollar"]
            },
            {
                icon: <Euro {...rest} />,
                name: "Euro",
                data: ["Euro"]
            },
            {
                icon: <Pound {...rest} />,
                name: "Pound",
                data: ["Pound"]
            },
            {
                icon: <Ruble {...rest} />,
                name: "Ruble",
                data: ["Ruble"]
            },
            {
                icon: <Session {...rest} />,
                name: "Session",
                data: ["Session"]
            },
            {
                icon: <Backspace {...rest} />,
                name: "Backspace",
                data: ["Backspace"]
            },
            {
                icon: <Checklist {...rest} />,
                name: "Checklist",
                data: ["Checklist"]
            },
            {
                icon: <DataVisualization {...rest} />,
                name: "DataVisualization",
                data: ["DataVisualization"]
            },
            {
                icon: <DragAndDrop {...rest} />,
                name: "DragAndDrop",
                data: ["DragAndDrop"]
            },
            {
                icon: <Drag {...rest} />,
                name: "Drag",
                data: ["Drag"]
            },
            {
                icon: <Exchange {...rest} />,
                name: "Exchange",
                data: ["Exchange"]
            },
            {
                icon: <Inventory {...rest} />,
                name: "Inventory",
                data: ["Inventory"]
            },
            {
                icon: <Newsletter {...rest} />,
                name: "Newsletter",
                data: ["Newsletter"]
            },
            {
                icon: <Hint {...rest} />,
                name: "Hint",
                data: ["Hint"]
            },
            {
                icon: <Event {...rest} />,
                name: "Event",
                data: ["Event"]
            },
            {
                icon: <OnlineStore {...rest} />,
                name: "OnlineStore",
                data: ["OnlineStore"]
            },
            {
                icon: <Logout1 {...rest} />,
                name: "Logout1",
                data: ["Logout1"]
            },
            {
                icon: <OrderStatus {...rest} />,
                name: "OrderStatus",
                data: ["OrderStatus"]
            },
            {
                icon: <CartAdded {...rest} />,
                name: "CartAdded",
                data: ["CartAdded"]
            },
            {
                icon: <Tracking {...rest} />,
                name: "Tracking",
                data: ["Tracking"]
            },
            {
                icon: <WriteReview {...rest} />,
                name: "WriteReview",
                data: ["WriteReview"]
            },
            {
                icon: <Ticket {...rest} />,
                name: "Ticket",
                data: ["Ticket"]
            },
            {
                icon: <Bank {...rest} />,
                name: "Bank",
                data: ["Bank"]
            },
            {
                icon: <Report {...rest} />,
                name: "Report",
                data: ["Report"]
            },
            {
                icon: <Pin {...rest} />,
                name: "Pin",
                data: ["Pin"]
            },
            {
                icon: <Refund {...rest} />,
                name: "Refund",
                data: ["Refund"]
            },
            {
                icon: <Member {...rest} />,
                name: "Member",
                data: ["Member"]
            },
            {
                icon: <Barcode {...rest} />,
                name: "Barcode",
                data: ["Barcode"]
            },
            {
                icon: <Variants {...rest} />,
                name: "Variants",
                data: ["Variants"]
            },
            {
                icon: <Bug {...rest} />,
                name: "Bug",
                data: ["Bug"]
            },
            {
                icon: <Language {...rest} />,
                name: "Language",
                data: ["Language"]
            },
            {
                icon: <Categories {...rest} />,
                name: "Categories",
                data: ["Categories"]
            },
            {
                icon: <Connect {...rest} />,
                name: "Connect",
                data: ["Connect"]
            },
            {
                icon: <CardEdit {...rest} />,
                name: "CardEdit",
                data: ["CardEdit"]
            },
            {
                icon: <Embed {...rest} />,
                name: "Embed",
                data: ["Embed"]
            },
            {
                icon: <CardLock {...rest} />,
                name: "CardLock",
                data: ["CardLock"]
            }
        ],
    }
    return Icons;
}
