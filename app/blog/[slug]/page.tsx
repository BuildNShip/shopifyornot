import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost, getBlogSlugs } from "../../lib/blogs";
import styles from "./page.module.css";

type BlogPageParams = { slug: string };
const siteUrl = "https://shopifyornot.in";
const defaultOgImage = `${siteUrl}/meta-image.png`;
const fallbackDescription =
    "ShopifyOrNot blog post with tips, stories, and Shopify detection benchmarks.";
const fallbackKeywords = ["Shopify detector tips", "Shopify outbound", "Shopify API"];

function formatDate(dateString?: string) {
    if (!dateString) {
        return null;
    }

    const parsedDate = new Date(dateString);

    if (Number.isNaN(parsedDate.getTime())) {
        return dateString;
    }

    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(parsedDate);
}

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<BlogPageParams> | BlogPageParams;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: "Blog post not found | ShopifyOrNot",
        };
    }

    const { frontmatter } = post;
    const description = frontmatter.description ?? fallbackDescription;
    const keywords = frontmatter.keywords?.length ? frontmatter.keywords : fallbackKeywords;
    const canonicalUrl = `${siteUrl}/blog/${slug}`;

    return {
        title: `${frontmatter.title} | ShopifyOrNot Blog`,
        description,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: frontmatter.title,
            description,
            type: "article",
            url: canonicalUrl,
            siteName: "ShopifyOrNot.in",
            publishedTime: frontmatter.date,
            modifiedTime: frontmatter.date,
            authors: frontmatter.author ? [frontmatter.author] : undefined,
            tags: keywords,
            images: [
                {
                    url: defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: frontmatter.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: frontmatter.title,
            description,
            images: [defaultOgImage],
            site: "@shopifyornot",
            creator: frontmatter.author,
        },
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<BlogPageParams> | BlogPageParams;
}) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const { frontmatter, content } = post;
    const formattedDate = formatDate(frontmatter.date);
    const metaDescription = frontmatter.description ?? fallbackDescription;
    const canonicalUrl = `${siteUrl}/blog/${slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: frontmatter.title,
        description: metaDescription,
        author: frontmatter.author
            ? { "@type": "Person", name: frontmatter.author }
            : { "@type": "Organization", name: "ShopifyOrNot.in" },
        datePublished: frontmatter.date,
        dateModified: frontmatter.date,
        mainEntityOfPage: canonicalUrl,
        image: [defaultOgImage],
        keywords: frontmatter.keywords ?? fallbackKeywords,
        publisher: {
            "@type": "Organization",
            name: "ShopifyOrNot.in",
            logo: {
                "@type": "ImageObject",
                url: defaultOgImage,
            },
        },
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${siteUrl}/blogs`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: frontmatter.title,
                item: canonicalUrl,
            },
        ],
    };

    return (
        <section className={styles.blogPage}>
            <header className={styles.header}>
                <p className={styles.kicker}>ShopifyOrNot Blog</p>
                <h1 className={styles.title}>{frontmatter.title}</h1>
                {frontmatter.description && (
                    <p className={styles.description}>{frontmatter.description}</p>
                )}
                <div className={styles.metaRow}>
                    {frontmatter.author && <span className={styles.metaItem}>{frontmatter.author}</span>}
                    {formattedDate && <span className={styles.metaItem}>{formattedDate}</span>}
                    {frontmatter.readingTime && (
                        <span className={styles.metaItem}>{frontmatter.readingTime}</span>
                    )}
                </div>
                {frontmatter.keywords?.length ? (
                    <div className={styles.tags} aria-label="Keywords">
                        {frontmatter.keywords.map((keyword) => (
                            <span key={keyword} className={styles.tag}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                ) : null}
            </header>

            <article className={styles.article}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </article>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
        </section>
    );
}
