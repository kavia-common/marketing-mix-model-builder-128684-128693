/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#64748b",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#fbbf24",
          foreground: "#1f2937"
        },
        // shadcn/ui tokens
        border: "hsl(214, 32%, 91%)",
        input: "hsl(214, 32%, 91%)",
        ring: "#2563eb",
        background: "#ffffff",
        foreground: "#0f172a",
        muted: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(215, 16%, 47%)"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
};
