import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts } from "../lib/blogs";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "ShopifyOrNot Blog | Shopify Detection Guides & Updates",
    description:
        "Concise Shopify detection guides, outbound playbooks, and product updates from the ShopifyOrNot team.",
    keywords: [
        "ShopifyOrNot blog",
        "Shopify detector guides",
        "Shopify outbound tips",
        "Shopify API updates",
        "Shopify store checker",
    ],
    alternates: {
        canonical: "/blogs",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: "https://shopifyornot.in/blogs",
        title: "ShopifyOrNot Blog | Shopify Detection Guides & Updates",
        description:
            "Shopify detection best practices, outbound workflows, and product updates from ShopifyOrNot.",
        siteName: "ShopifyOrNot.in",
        images: [
            {
                url: "https://shopifyornot.in/meta-image.png",
                width: 1200,
                height: 630,
                alt: "ShopifyOrNot Blog preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ShopifyOrNot Blog | Shopify Detection Guides & Updates",
        description:
            "Shopify detection best practices, outbound workflows, and product updates from ShopifyOrNot.",
        images: ["https://shopifyornot.in/meta-image.png"],
        site: "@shopifyornot",
    },
};

function formatDate(dateString?: string) {
    if (!dateString) {
        return null;
    }

    const parsedDate = new Date(dateString);
    if (Number.isNaN(parsedDate.getTime())) {
        return dateString;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(parsedDate);
}

export default async function BlogsPage() {
    const posts = await getAllBlogPosts();
    const [featured, ...rest] = posts;
    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "ShopifyOrNot Blog",
        url: "https://shopifyornot.in/blogs",
        description:
            "Shopify detection guides, outbound playbooks, and product updates from ShopifyOrNot.",
        publisher: {
            "@type": "Organization",
            name: "ShopifyOrNot.in",
            url: "https://shopifyornot.in",
        },
    };

    return (
        <section className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.kicker}>ShopifyOrNot Blog</p>
                    <h1 className={styles.title}>Guides, Benchmarks, and Stories</h1>
                    <p className={styles.subtitle}>
                        Deep-dives on Shopify detection, outbound workflows, and how we build ShopifyOrNot.
                    </p>
                    <div className={styles.heroMeta}>
                        <span className={styles.heroStat}>{posts.length} articles</span>
                        <span className={styles.heroDot} />
                        <span className={styles.heroStat}>Built for sales and product teams</span>
                    </div>
                </div>
                <div className={styles.heroBadge}>
                    <span className={styles.heroBadgeGlow} />
                    <span className={styles.heroBadgeText}>Updated regularly</span>
                </div>
            </div>

            {featured && (
                <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
                    <div className={styles.featuredEyebrow}>Featured</div>
                    <h2 className={styles.featuredTitle}>{featured.frontmatter.title}</h2>
                    {featured.frontmatter.description && (
                        <p className={styles.featuredDescription}>{featured.frontmatter.description}</p>
                    )}
                    <div className={styles.meta}>
                        {featured.frontmatter.author && <span>{featured.frontmatter.author}</span>}
                        {featured.frontmatter.date && <span>• {formatDate(featured.frontmatter.date)}</span>}
                        {featured.frontmatter.readingTime && (
                            <span className={styles.pill}>{featured.frontmatter.readingTime}</span>
                        )}
                    </div>
                    {featured.frontmatter.keywords?.length ? (
                        <div className={styles.tagRow} aria-label="Keywords">
                            {featured.frontmatter.keywords.slice(0, 4).map((keyword) => (
                                <span key={keyword} className={styles.tag}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </Link>
            )}

            <div className={styles.grid}>
                {rest.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                        <div className={styles.cardEyebrow}>Article</div>
                        <h3 className={styles.cardTitle}>{post.frontmatter.title}</h3>
                        {post.frontmatter.description && (
                            <p className={styles.cardDescription}>{post.frontmatter.description}</p>
                        )}
                        <div className={styles.meta}>
                            {post.frontmatter.author && <span>{post.frontmatter.author}</span>}
                            {post.frontmatter.date && <span>• {formatDate(post.frontmatter.date)}</span>}
                            {post.frontmatter.readingTime && (
                                <span className={styles.pill}>{post.frontmatter.readingTime}</span>
                            )}
                        </div>
                        {post.frontmatter.keywords?.length ? (
                            <div className={styles.tagRow} aria-label="Keywords">
                                {post.frontmatter.keywords.slice(0, 3).map((keyword) => (
                                    <span key={keyword} className={styles.tag}>
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </Link>
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
        </section>
    );
}
