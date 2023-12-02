import {defineConfig} from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: 'hero',
                label: 'Hero',
                path: 'content/hero',

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Hero Button",
                        name: "button",
                        required: true,
                    },
                    {
                        type: "string",
                        label: 'Hero Video',
                        name: 'hero_video',
                        required: true,
                    },
                ],
            },

            {
                name: "training",
                label: "Training",
                path: "content/training",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                ]
            },

            {
                name: "training_cards",
                label: "Training Cards",
                path: "content/training-cards",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    }
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Image",
                        name: "image",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Image Alt",
                        name: "imageAlt",
                        required: true,
                    },
                ]
            },

            {
                name: "profile",
                label: "Profile",
                path: "content/profile",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Profile Image",
                        name: "profile_image",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Profile Image Alt",
                        name: "profile_image_alt",
                        required: true,
                    },
                ]
            },

            {
                name: "qualifications",
                label: "Qualifications",
                path: "content/qualifications",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                ]
            },

            {
                name: "qualifications_cards",
                label: "Qualifications Cards",
                path: "content/qualifications-cards",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image",
                        name: "image",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image Alt",
                        name: "imageAlt",
                        required: true,
                    },
                ]
            },

            {
                name: "approach",
                label: "Approach",
                path: "content/approach",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                ]
            },

            {
                name: "approach_cards",
                label: "Approach Cards",
                path: "content/approach-cards",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image",
                        name: "image",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image Alt",
                        name: "imageAlt",
                        required: true,
                    },
                ]
            },

            {
                name: "testimonials",
                label: "Testimonials",
                path: "content/testimonials",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Quote",
                        name: "quote",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Name",
                        name: "name",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image",
                        name: "image",
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Image Alt",
                        name: "imageAlt",
                        required: true,
                    },
                ]
            },

            {
                name: "contact",
                label: "Contact",
                path: "content/contact",

                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },

                fields: [
                    {
                        type: "string",
                        label: "Heading",
                        name: "heading",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Subheading",
                        name: "subheading",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Description",
                        name: "description",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Name Label",
                        name: "form_name_label",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Name Placeholder",
                        name: "form_name_placeholder",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Email Label",
                        name: "form_email_label",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Email Placeholder",
                        name: "form_email_placeholder",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Message Label",
                        name: "form_message_label",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Message Placeholder",
                        name: "form_message_placeholder",
                        required: true,
                    },

                    {
                        type: "string",
                        label: "Form Button",
                        name: "form_button",
                        required: true,
                    },
                ]
            }
        ],
    },
});
