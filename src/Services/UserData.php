<?php

namespace App\Services;

class UserData
{
    public array $mainCategories = [
        'Graphics and Design',
        'Digital Marketing',
        // 'Writing and Translations',
        // 'Vidéos and Animations',
        // 'Music and Audio',
        'Programming and Tech',
        'Data',
        // 'Business',
        // 'Lifestyle',
    ];

    public array $subCategories = [
        'Graphics and Design' => [
            'Logo and Brand Identity',
            'Gaming',
            'Art and Illustration',
            'Web and App Design',
            'Social Media',
            // 'Packaging and Labels',
            // 'Visual Design',
            // 'Architecture and Building Design',
            // 'Fashion and Merchandise',
            // 'Print Design',
            // 'Product and Characters Design',
            // 'Misc',
        ],
        'Digital Marketing' => [
            'Social Media Marketing',
            'Social Media Advertising',
            'Search Engine Optimization (SEO)',
            'Local SEO',
            'Marketing Strategy',
            'Public Relations',
            'Content Marketing',
            // 'Video Marketing',
            // 'Email Marketing',
            // 'Web Analytics',
            // 'Crowdfunding',
            // 'Text Message Marketing',
            // 'Search Engine Marketing',
            // 'Display Advertising',
            // 'E-Commerce Marketing',
            // 'Influencer Marketing',
            // 'Community Management',
            // 'Mobile App Marketing',
            // 'Music Promotion',
            // 'Book and eBook Marketing',
            // 'Affiliate Marketing',
            // 'Podcast Marketing',
            // 'Other',
        ],
        // 'Writing and Translations' => [
        //     'Articles and Blog Posts',
        //     'Translation',
        //     'Proofreading and Editing',
        //     'Resume Writing',
        //     'Cover Letters',
        //     'LinkedIn Profiles',
        //     'Ad Copy',
        //     'Sales Copy',
        //     'Social Media Copy',
        //     'Email Copy',
        //     'Case Studies',
        //     'Book and eBook Writing',
        //     'Book Editing',
        //     'Scriptwriting',
        //     'Podcast Writing',
        //     'Beta Reading',
        //     'Creative Writing',
        //     'Brand Voice and Tone',
        //     'UX Writing',
        //     'Speechwriting',
        //     'eLearning Content Development',
        //     'White Papers',
        //     'Website Content',
        //     'Product Descriptions',
        //     'Press Releases',
        //     'Business Names and Slogans',
        //     'Technical Writing',
        //     'Legal Writing',
        //     'Grant Writing',
        //     'Transcripts',
        //     'Research and Summaries',
        //     'Oher',
        // ],
        // 'Vidéos and Animations' => [
        //     'Whiteboard and Animated Explainers',
        //     'Video Editing',
        //     'Short Video Ads',
        //     'Lyric and Music Videos',
        //     'Character Animation',
        //     'Logo Animation',
        //     'Animated GIFs',
        //     'App and Website Previews',
        //     'Subtitles and Captions',
        //     'E-Commerce Product Videos',
        //     'Spokesperson Videos',
        //     'Live Action Explainers',
        //     '3D Product Animation',
        //     'Visual Effects',
        //     'Unboxing Videos',
        //     'Slideshow Videos',
        //     'eLearning Video Production',
        //     'Screencasting Videos',
        //     'Article to Video',
        //     'Animation for Kids',
        //     'Intros and Outros',
        //     'Animation for Streamers',
        //     'Lottie and Website Animation',
        //     'Game Trailers',
        //     'Book Trailers',
        //     'Drone Videography',
        //     'Real Estate Promos',
        //     'Product Photography',
        //     'Local Photography',
        //     'Other',
        // ],
        // 'Music and Audio' => [
        //     'Voice Over',
        //     'Producers and Composers',
        //     'Singers and Vocalists',
        //     'Mixing and Mastering',
        //     'Session Musicians',
        //     'Online Music Lessons',
        //     'Podcast Editing',
        //     'Songwriters',
        //     'Beat Making',
        //     'Audiobook Production',
        //     'Audio Ads Production',
        //     'Sound Design',
        //     'Jingles and Intros',
        //     'Dialogue Editing',
        //     'Music Transcription',
        //     'Vocal Tuning',
        //     'DJ Drops and Tags',
        //     'DJ Mixing',
        //     'Remixing and Mashups',
        //     'Synth Presets',
        //     'Meditation Music',
        //     'Other',
        // ],
        'Programming and Tech' => [
            'WordPress',
            'Website Builders and CMS',
            'Game Development',
            'Development for Streamers',
            'Web Programming',
            // 'E-Commerce Development',
            // 'Mobile Apps',
            // 'Desktop Applications',
            // 'Support and IT',
            // 'Get Your Website in a Few Steps',
            // 'Chatbots',
            // 'Online Coding Lessons',
            // 'Cybersecurity and Data Protection',
            // 'Convert Files',
            // 'User Testing',
            // 'QA and Review',
            // 'Other',
        ],
        'Data' => [
            'Databases',
            'Data Processing',
            'Data Analytics',
            'Data Visualization',
            'Data Science',
            'Data Entry',
            'Other',
        ],
        // 'Business' => [
        //     'Virtual Assistant',
        //     'Market Research',
        //     'Customer Care',
        //     'Project Management',
        //     'Business Consulting',
        //     'Business Plans',
        //     'Presentations',
        //     'Lead Generation',
        //     'Game Concept Design',
        //     'Legal Consulting',
        //     'Financial Consulting',
        //     'E-Commerce Management',
        //     'Supply Chain Management',
        //     'HR Consulting',
        //     'Career Counseling',
        //     'Flyer Distribution',
        //     'Other',
        // ],
        // 'Lifestyle' => [
        //     'Online Tutoring',
        //     'Gaming',
        //     'Astrology and Psychics',
        //     'Modeling and Acting',
        //     'Traveling',
        //     'Health, Nutrition and Fitness',
        //     'Fitness Lessons',
        //     'Dance Lessons',
        //     'Life Coaching',
        //     'Greeting Cards and Videos',
        //     'Personal Stylists',
        //     'Cooking Lessons',
        //     'Craft Lessons',
        //     'Arts and Crafts',
        //     'Family and Genealogy',
        //     'Your Message On...',
        //     'Collectibles',
        //     'Other',
        // ],
    ];

    public array $language = [
        'English',
        'Hindi',
        'Spanish',
        'German',
        'Arabic',
        // 'Italian',
        // 'Dutch',
        // 'Javanese',
        // 'Ukrainian',
        // 'Urdu',
        // 'French',
        // 'Bengali',
        // 'Punjabi',
        // 'Gujarati',
        // 'Chinese',
        // 'Russian',
        // 'Hebrew',
        // 'Vietnamese',
    ];

    public array $hourlyRate = [
        'less than 10$ per hour',
        'less than 20$ per hour',
        'more than 20$ per hour',
    ];
}
