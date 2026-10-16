import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
            <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold">Blog App</Link>
                <nav>
                    <Link href="/" className="font-medium">Home</Link>
                </nav>
            </div>
        </header>
    );
}