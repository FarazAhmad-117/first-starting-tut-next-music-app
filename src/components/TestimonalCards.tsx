'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';


const testimonials = [
    {
    quote:
        "Joining this music school has been a transformative experience. The instructors are incredibly knowledgeable and supportive, helping me improve my piano skills beyond what I thought possible.",
    name: "Emily Johnson",
    title: "Piano Student",
    },
    {
    quote:
        "I've learned so much about music theory and composition here. The environment is inspiring and the faculty truly care about each student's progress. I highly recommend this school!",
    name: "Michael Smith",
    title: "Music Composition Student",
    },
    {
    quote:
        "The vocal training program is top-notch. The techniques I've learned have significantly improved my vocal range and performance confidence.",
    name: "Sarah Brown",
    title: "Vocal Student",
    },
    {
    quote:
        "As a beginner, I was nervous about learning guitar, but the patience and expertise of my instructor made all the difference. Now, I can play my favorite songs with ease!",
    name: "David Wilson",
    title: "Guitar Student",
    },
    {
    quote:
        "This school has an amazing community of musicians. The group classes and ensemble opportunities have been fantastic for building my skills and making new friends.",
    name: "Olivia Davis",
    title: "Violin Student",
    },
];

function TestimonalCards() {
    return (
        <div className='h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.1] bg-grid-green-500/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
            <h2 className='text-3xl font-bold text-center mb-8 z-10' >Hear our Harmoney: Voices Of Success</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8' >
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards 
                    items={testimonials} 
                    direction={'right'} 
                    speed="slow" />
                </div>
            </div>
        </div>
    )
}

export default TestimonalCards