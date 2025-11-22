Here is a **clean, structured, precise project description** you can directly give to **Codex / Cursor / v0 / Claude Artifacts** to initialize your project:

---

## **Project Description**

Build a **minimal, single-page web application** that allows users to check whether a given website is powered by **Shopify**.

### **Purpose / Target Users**

The primary users are **SalesOps teams** of SaaS businesses who sell Shopify plugins and need a quick way to verify if a potential lead is running on Shopify.

### **Design Requirements**

-   **UI Style:** Ultra-minimal and clean.
-   **Primary Background:** White (`#FFFFFF`)
-   **Secondary / Accent Color:** Green (`#14A44D` or similar soft green).
-   **Font Style:** Formal but slightly playful (examples: `Inter`, `Poppins`, `Sora`, or `Nunito Sans`).
-   **Layout:** Modern, centered, lots of whitespace.

### **Hero Section**

-   A **single one-liner headline**, for example:

    > “Check if a website is running on Shopify.”

-   Below it: A **single input field** where the user enters a website URL.
-   Pressing **Enter** or clicking _Check_ should trigger the check request.

### **Functionality**

1. When the user submits a website URL, call the API:

    ```
    GET https://dev-api.makemypass.com/check?url=<INPUT_URL>
    ```

2. The API response will return JSON like:

    ```json
    {
        "input_url": "carencurepharmacy.com",
        "final_url": "https://www.carencurepharmacy.com/",
        "is_shopify": true,
        "confidence": 1,
        "detected_signals": [
            "hdr:x-sorting-hat-podid=79",
            "hdr:x-sorting-hat-shopid=11044168",
            "body:Shopify.theme",
            "body:cdn.shopify.com",
            "body:myshopify.com",
            "body:window.Shopify"
        ],
        "shop_domain": "carencurepharmacy.myshopify.com",
        "headers_sample": {
            "server": "cloudflare",
            "x-sorting-hat-shopid": "11044168"
        },
        "elapsed_ms": 613
    }
    ```

3. Display the results in a **simple, nice, compact result card**:

    - Show whether it **is a Shopify store** (`YES / NO`)
    - Show **confidence**
    - Show the **Shopify domain** (if detected)
    - Show the **Final resolved URL**
    - Add an expandable section called **“Technical Signals”** to display `detected_signals` and `headers_sample`.

### **User Experience Notes**

-   The app should not look like a dashboard — keep it minimal.
-   Center the content vertically and horizontally.
-   Don’t overwhelm the user — just clear, bold results.
-   No login, no footer, no nav bar required.
