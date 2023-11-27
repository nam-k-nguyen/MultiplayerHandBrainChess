export default function UnknownPage({ params }: { params: { segment: string[] } }) {
    return (
        <p>Unknown segment {params.segment.join('/')}</p>
    )
}