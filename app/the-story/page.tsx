import React from "react";

export default function TheStoryPage() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#999999] mb-2">
                        Origin Story
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-3">
                        The Story Behind ShopifyOrNot
                    </h1>
                    <p className="text-sm md:text-base text-[#666666] mb-2">
                        A tiny micro-tool born out of two almost identical Google searches.
                    </p>
                    <p className="text-xs md:text-sm text-[#999999]">
                        Published on November 22, 2025
                    </p>
                </header>

                <article className="prose prose-neutral text-[15px] leading-relaxed text-[#1A1A1A] [&>p]:mt-0 [&>p]:mb-4">
                    <p>
                        This idea didn’t come from a big vision or a business plan. It came from two
                        small moments that happened in my life, parallel, almost identical, and
                        somehow connected.
                    </p>

                    <p>
                        When I first started working inside the Shopify ecosystem, I had one simple
                        need: Check if a website is built on Shopify or not.
                    </p>

                    <p>But it was never straightforward.</p>

                    <p>
                        I had to open the console, inspect scripts, check network calls, or rely on
                        random third-party sites that were slow, full of ads, or just not friendly.
                        Every time I needed a quick answer, I found myself frustrated. And yes, even
                        I typed the exact Google search:
                    </p>

                    <p className="italic text-[#424242]">
                        <span className="font-semibold">“is shopify or not”</span>
                    </p>

                    <p>That moment stayed with me, so I wrote it down in my notes and moved on.</p>

                    <p>
                        A few days later, I was casually talking to a friend. Out of nowhere, the
                        same topic came up. He said their team was struggling with the same thing,
                        quickly checking whether a lead’s website is on Shopify.
                    </p>

                    <p>And then he told me something that made me smile:</p>

                    <p>
                        His founder, Arjun Paul (Zoko’s founder), had searched the exact same
                        phrase:
                    </p>

                    <p className="italic text-[#424242]">
                        <span className="font-semibold">“Is shopify or not”</span>
                    </p>

                    <p>
                        It was the same search I did. The same frustration. The same tiny problem we
                        both felt at different times.
                    </p>

                    <p>That’s when it clicked.</p>

                    <p>
                        We looked at each other and said: “Let’s just build it… a small, clean
                        micro-tool. A weekend project. Nothing big. Just fun.”
                    </p>

                    <p>
                        So that’s what this is, a tool born from two parallel stories, two founders’
                        tiny pain points, and one very relatable Google search.
                    </p>

                    <p>
                        If this helps even one person save a few seconds, I’m happy. That’s the
                        whole intention.
                    </p>

                    <p>
                        Sometimes, the smallest tools are built from the simplest human frustrations.
                    </p>

                    <p className="text-[#666666]">
                        - Team ShopifyOrNot
                    </p>
                </article>
            </div>
        </section>
    );
}
