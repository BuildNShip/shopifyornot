design_system "shopify_marketing" v1.0 {

meta {
source: "https://www.shopify.com/in"
type: "marketing_website"
description: "Full tokenized UI/UX system for Shopify’s public marketing experience."
}

foundations {

    colors {
      brand {
        primary: "#008060"
        primary_accent: "#00A56A"
        dark: "#003E2F"
      }

      neutral {
        black: "#1A1A1A"
        dark_gray: "#424242"
        mid_gray: "#999999"
        border: "#DCDCDC"
        light_gray: "#F6F6F6"
        white: "#FFFFFF"
      }

      states {
        success: "#00A56A"
        warning: "#FFC453"
        error: "#D72C0D"
        info: "#2C6ECB"
      }


      accents {
        blue: "#006EFF"
        yellow: "#FFD95A"
        red: "#E34850"
        mint: "#E6F7F1"
      }
    }

    typography {
      families {
        primary: ["ShopifySans", "Graphik", "Inter", "system-ui"]
      }

      weights {
        light: 300
        regular: 400
        medium: 500
        semibold: 600
        bold: 700
      }

      scale {
        display_xl: 72
        display_l: 64
        display_m: 48

        h1: 40
        h2: 32
        h3: 24
        h4: 20

        body_l: 18
        body_m: 16
        body_s: 14

        caption: 12
      }

      line_height {
        display: 1.10
        heading: 1.20
        body: 1.55
      }
    }

    spacing {
      base_unit: 8

      scale: [
        4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 120
      ]
    }

    radii {
      sm: 4
      md: 8
      lg: 12
    }

    elevation {
      level_0: "none"
      level_1: "0px 2px 6px rgba(0,0,0,0.08)"
      level_2: "0px 6px 20px rgba(0,0,0,0.10)"
      level_3: "0px 12px 32px rgba(0,0,0,0.15)"
    }

    gradients {
      green_soft: "linear-gradient(135deg, #E6F7F1 0%, #FFFFFF 100%)"
      blue_soft: "linear-gradient(135deg, #E3F0FF 0%, #FFFFFF 100%)"
    }

    layout {
      container_width: 1280
      content_width: 760
      grid_columns: 12

      breakpoints {
        mobile: 0-640
        tablet: 641-1024
        desktop: 1025-1440
        widescreen: 1441+
      }

      gutters {
        mobile: 24
        desktop: 40
      }
    }

}

components {

    button {
      primary {
        background: @colors.brand.primary
        text_color: @colors.neutral.white
        padding_y: 16
        padding_x: 28
        radius: @radii.md
        font_size: @typography.body_m
        hover.background: darken(@colors.brand.primary, 10%)
        focus.outline: 3px solid @colors.brand.primary_accent
        shadow: @elevation.level_1
      }

      secondary {
        border: 1.5px solid @colors.neutral.black
        background: transparent
        text_color: @colors.neutral.black
        radius: @radii.md
        hover.background: @colors.neutral.light_gray
      }

      link {
        text_color: @colors.brand.primary
        hover.underline: true
      }
    }

    input {
      border: 1px solid @colors.neutral.border
      padding: 14
      radius: @radii.sm
      font_size: @typography.body_m
      focus.outline: 2px solid @colors.states.info
    }

    card {
      background: @colors.neutral.white
      padding: 32
      radius: @radii.lg
      shadow: @elevation.level_1
      layout: "title → text → CTA"
    }

    navbar {
      height: 72
      background.default: "transparent"
      background.scrolled: @colors.neutral.white
      text_color: @colors.neutral.black

      mobile.drawer {
        background: @colors.neutral.white
        item_spacing: 28
      }
    }

    footer {
      background: "#111111"
      text_color: @colors.neutral.white

      columns: 6
      legal_text_size: @typography.caption
    }

}

imagery {

    photography {
      style: "clean, editorial, authentic"
      saturation: "medium-low"
      temperature: "consistent, natural daylight"
      mockup_frames: true
      depth_shadows: @elevation.level_1
    }

    illustrations {
      style: "minimal, geometric, rounded"
      accents: [
        @colors.accents.blue,
        @colors.accents.yellow,
        @colors.accents.mint
      ]
      gradients_allowed: true
    }

    icons {
      stroke_width: 2
      corner_style: "rounded"
      color: @colors.neutral.black
    }

}

motion {

    timing {
      fast: 120ms
      medium: 180ms
      slow: 260ms
    }

    easing {
      standard: "cubic-bezier(0.25,0.1,0.25,1)"
      accelerate: "cubic-bezier(0.0,0.0,0.2,1)"
      decelerate: "cubic-bezier(0.4,0.0,1,1)"
    }

    patterns {
      scroll_fade_up {
        translate_y: 24
        opacity_start: 0
        opacity_end: 1
        duration: @motion.timing.medium
      }

      button_hover {
        scale: 1.05
        shadow: @elevation.level_2
      }

      parallax {
        speed_factor: 0.3
      }
    }

}

sections {

    hero {
      layout: "2-column"
      spacing_y: 120
      headline_size: @typography.display_l
      text_width_limit: @layout.content_width
      cta_group: ["primary", "secondary"]
      image_position: "right"
      image_shadow: @elevation.level_2
      background: @colors.neutral.white
    }

    social_proof {
      layout: "logo-grid"
      logo_tint: "grayscale"
      columns: 6
      spacing_y: 64
    }

    value_props {
      layout: "alternating"
      item_spacing_y: 80
      elements: ["icon", "heading", "text", "cta", "image"]
    }

    steps {
      numbering_style: "numeric"
      number_size: 48
      background: @colors.neutral.light_gray
      spacing_y: 80
    }

    features {
      layout: "3-column-cards"
      card.shadow: @elevation.level_1
      icon_size: 32
    }

    testimonials {
      layout: "photo + quote"
      quote_size: @typography.h2
      spacing_y: 120
      image_radius: @radii.lg
    }

    cta_fullwidth {
      background: @colors.brand.primary
      text_color: @colors.neutral.white
      text_align: "center"
      padding_y: 120
    }

}

accessibility {
contrast.minimum_ratio: "4.5:1"
keyboard_navigation: true
focus_visible: true
semantic_structure: true
alt_text.required: true
}

responsive {

    mobile {
      typography_scale: 0.75
      spacing_factor: 0.8
      stack_order: "vertical-first"
      hero.image_position: "below_text"
    }

    tablet {
      spacing_factor: 0.9
      enable_2_cols: true
    }

    desktop {
      spacing_factor: 1.0
      max_width: @layout.container_width
    }

}

content_guidelines {

    tone {
      style: "confident, clear, empowering"
      avoid: ["jargon", "overly technical language"]
    }

    headlines {
      max_length: 12
      type: "action-driven"
      preferred_verbs: ["Sell", "Start", "Grow", "Build", "Launch"]
    }

    body_text {
      max_sentences: 2
      clarity_priority: true
    }

    calls_to_action {
      primary_texts: ["Start free trial", "Get started", "Explore features"]
      structure: "verb + outcome"
    }

}
}
