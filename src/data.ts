interface NavLinks {
    text: string;
    href: string;
    icon: string;
}

export const navLinks = (): { links: NavLinks[] } => ({
    links: [
        { text: "Your stay", href: "your-say", icon: "icon-bed.svg" },
        { text: "The house", href: "the-house", icon: "icon-house.svg" },
        { text: "Around town", href: "around-town", icon: "icon-pin.svg" },
        {
            text: "Breakfast",
            href: "breakfast",
            icon: "icon-breakfast-outline.svg",
        },
        { text: "Messages", href: "messages", icon: "icon-mail.svg" },
    ],
});

interface HeroButtons {
    text: string;
    class: string;
}

export const heroButtons = (): { buttons: HeroButtons[] } => ({
    buttons: [
        { text: "Print receipt", class: "text-neutral-900 hover:bg-neutral-200/50" },
        { text: "Add to calendar", class: "bg-neutral-900 text-neutral-200 hover:bg-neutral-800" },
    ],
});
