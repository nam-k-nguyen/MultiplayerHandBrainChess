import Gamemode from "@/app/_components/Gamemode"

export default function Play() {
    return (
        <>
            <Gamemode variant="traditional" playerType={['human', 'human', null, null]} />
        </>
    )
}