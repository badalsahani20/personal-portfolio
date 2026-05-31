import React, { useState, useEffect } from 'react';
import { Github, Code, Award, Activity, TrendingUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const DeveloperStats = () => {
    const [leetcode, setLeetcode] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLeetcodeStats = async () => {
            try {
                // Fetch both Solved Counts and Profile Ranking concurrently from the stable Alfa LeetCode API
                const [solvedRes, profileRes] = await Promise.all([
                    fetch('https://alfa-leetcode-api.onrender.com/badalsahani20/solved'),
                    fetch('https://alfa-leetcode-api.onrender.com/badalsahani20')
                ]);

                if (!solvedRes.ok || !profileRes.ok) throw new Error('API request failed');
                
                const solvedData = await solvedRes.json();
                const profileData = await profileRes.json();
                
                // Calculate acceptance rate from submissions list
                let calculatedAcceptanceRate = 59.2;
                if (solvedData.acSubmissionNum && solvedData.totalSubmissionNum && solvedData.totalSubmissionNum[0].submissions > 0) {
                    calculatedAcceptanceRate = Math.round((solvedData.acSubmissionNum[0].submissions / solvedData.totalSubmissionNum[0].submissions) * 100);
                }

                setLeetcode({
                    totalSolved: solvedData.solvedProblem || 34,
                    totalQuestions: 3200, // Total LeetCode questions denominator
                    easySolved: solvedData.easySolved || 14,
                    totalEasy: 820,
                    mediumSolved: solvedData.mediumSolved || 16,
                    totalMedium: 1640,
                    hardSolved: solvedData.hardSolved || 4,
                    totalHard: 740,
                    acceptanceRate: calculatedAcceptanceRate,
                    ranking: profileData.ranking || 3322885
                });
            } catch (err) {
                console.error('Failed to fetch live LeetCode stats, defaulting to stable fallback data:', err);
                setError(true);
                // Graceful fallback to static cached values so the site never breaks
                setLeetcode({
                    totalSolved: 34,
                    totalQuestions: 3200,
                    easySolved: 14,
                    totalEasy: 820,
                    mediumSolved: 16,
                    totalMedium: 1640,
                    hardSolved: 4,
                    totalHard: 740,
                    acceptanceRate: 84, // Calculated from 70 accepted out of 83 submissions
                    ranking: 3322885
                });
            } finally {
                setLoading(false);
            }
        };

        fetchLeetcodeStats();
    }, []);

    // Calculate percentage for circular/linear bars
    const getPercent = (solved, total) => {
        if (!total) return 0;
        return Math.min(Math.round((solved / total) * 100), 100);
    };

    return (
        <section id="stats" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] bg-primary/5 pointer-events-none z-0" />
            <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] bg-primary/5 pointer-events-none z-0" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Coding <span className="text-primary"> Consistency </span> & Analytics
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Real-time metrics demonstrating problem-solving consistency, active contribution calendars, and Data Structures & Algorithms (DSA) solving profiles.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
                    
                    {/* LEFT PANEL: GITHUB ACTIVITY (7 Cols on large screen) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <Card className="card-hover h-full flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <Github className="text-primary h-6 w-6" /> GitHub Contributions
                                    </span>
                                    <a 
                                        href="https://github.com/badalsahani20" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                                    >
                                        Visit Profile <ExternalLink size={12} />
                                    </a>
                                </CardTitle>
                                <CardDescription>
                                    Pushed commits, built architectures, and deployed features over the last year.
                                </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="flex-grow flex flex-col justify-between">
                                {/* Dynamic Contribution Calendar Calendar */}
                                <div className="p-4 rounded-xl border border-border/40 bg-background/50 overflow-x-auto custom-scrollbar shadow-inner flex justify-center mb-6">
                                    <img 
                                        src="https://ghchart.rshah.org/badalsahani20" 
                                        alt="Badal Sahani's GitHub Contributions Calendar"
                                        className="min-w-[720px] h-auto object-contain select-none"
                                        draggable="false"
                                    />
                                </div>

                                {/* Active Streaks Embedded Card */}
                                <div className="flex justify-center border-t border-border/40 pt-6 mt-auto">
                                    <img 
                                        src="https://github-readme-streak-stats.herokuapp.com/?user=badalsahani20&theme=tokyonight&background=0d111700&ring=39d353&fire=39d353&sideNums=2ea44f&sideLabels=cbd5e1&currStreakNum=39d353&currStreakLabel=2ea44f&hide_border=true" 
                                        alt="Badal Sahani's GitHub Coding Streaks"
                                        className="max-w-full h-auto object-contain"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* RIGHT PANEL: LEETCODE Solved Stats (5 Cols on large screen) */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <Card className="card-hover h-full flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <Code className="text-primary h-6 w-6" /> LeetCode DSA Profile
                                    </span>
                                    <a 
                                        href="https://leetcode.com/u/badalsahani20/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                                    >
                                        Visit Profile <ExternalLink size={12} />
                                    </a>
                                </CardTitle>
                                <CardDescription>
                                    Live algorithmic analysis metrics queried directly via the LeetCode solver database.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow flex flex-col justify-between">
                                {loading ? (
                                    /* SHIMMER LOADING STATE */
                                    <div className="space-y-6 animate-pulse">
                                        <div className="flex justify-center py-4">
                                            <div className="w-32 h-32 rounded-full border-[10px] border-secondary/60 flex items-center justify-center">
                                                <div className="w-16 h-8 bg-secondary rounded-md" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-6 bg-secondary rounded-md w-full" />
                                            <div className="h-6 bg-secondary rounded-md w-full" />
                                            <div className="h-6 bg-secondary rounded-md w-full" />
                                        </div>
                                    </div>
                                ) : (
                                    /* ACTIVE DYNAMIC DATA STATE */
                                    <div className="space-y-6 flex-grow">
                                        {/* Total solved Circle representation */}
                                        <div className="flex justify-center items-center py-2 relative">
                                            <div className="relative w-36 h-36 flex items-center justify-center">
                                                {/* Circular gauge */}
                                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle 
                                                        cx="50" cy="50" r="42" 
                                                        className="stroke-secondary/50 fill-none" 
                                                        strokeWidth="8"
                                                    />
                                                    <circle 
                                                        cx="50" cy="50" r="42" 
                                                        className="stroke-primary fill-none transition-all duration-1000 ease-out" 
                                                        strokeWidth="8"
                                                        strokeDasharray={`${2 * Math.PI * 42}`}
                                                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - getPercent(leetcode.totalSolved, leetcode.totalQuestions) / 100)}`}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                
                                                {/* Text values */}
                                                <div className="absolute flex flex-col items-center justify-center">
                                                    <span className="text-3xl font-extrabold tracking-tight">{leetcode.totalSolved}</span>
                                                    <span className="text-xs text-muted-foreground font-semibold mt-0.5">Solved</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3 Difficulty linear indicators using Shadcn Progress component */}
                                        <div className="space-y-4 pt-2">
                                            {/* EASY */}
                                            <div>
                                                <div className="flex justify-between text-sm font-semibold mb-1.5">
                                                    <span className="text-emerald-500">Easy</span>
                                                    <span className="text-muted-foreground">{leetcode.easySolved} <span className="text-xs">/ {leetcode.totalEasy}</span></span>
                                                </div>
                                                <Progress value={getPercent(leetcode.easySolved, leetcode.totalEasy)} indicatorClassName="bg-emerald-500" />
                                            </div>

                                            {/* MEDIUM */}
                                            <div>
                                                <div className="flex justify-between text-sm font-semibold mb-1.5">
                                                    <span className="text-amber-500">Medium</span>
                                                    <span className="text-muted-foreground">{leetcode.mediumSolved} <span className="text-xs">/ {leetcode.totalMedium}</span></span>
                                                </div>
                                                <Progress value={getPercent(leetcode.mediumSolved, leetcode.totalMedium)} indicatorClassName="bg-amber-500" />
                                            </div>

                                            {/* HARD */}
                                            <div>
                                                <div className="flex justify-between text-sm font-semibold mb-1.5">
                                                    <span className="text-rose-500">Hard</span>
                                                    <span className="text-muted-foreground">{leetcode.hardSolved} <span className="text-xs">/ {leetcode.totalHard}</span></span>
                                                </div>
                                                <Progress value={getPercent(leetcode.hardSolved, leetcode.totalHard)} indicatorClassName="bg-rose-500" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* bottom mini stats indicators */}
                                {!loading && (
                                    <div className="grid grid-cols-2 gap-4 border-t border-border/40 pt-6 mt-8">
                                        <div className="p-3.5 rounded-xl border border-border/30 bg-card/25 flex items-center gap-3">
                                            <TrendingUp className="h-5 w-5 text-primary shrink-0 animate-pulse" />
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Accept Rate</p>
                                                <p className="text-base font-extrabold">{leetcode.acceptanceRate}%</p>
                                            </div>
                                        </div>
                                        
                                        <div className="p-3.5 rounded-xl border border-border/30 bg-card/25 flex items-center gap-3">
                                            <Award className="h-5 w-5 text-primary shrink-0 animate-pulse" />
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Global Rank</p>
                                                <p className="text-base font-extrabold">#{leetcode.ranking.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperStats;
