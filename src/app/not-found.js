import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>pagina não encontrada</h2>
            <Link href="/">Retornar Home</Link>
        </div>
    )
}