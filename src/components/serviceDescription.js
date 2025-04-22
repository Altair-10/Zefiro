export default function ServiceDescription({ desc }) {
    return (
        <div className="h-auto flex justify-center items-center mx-[10vw] md:mx-[8vw] pt-6 md:pt-4">
            <h2 className="text-center text-gray-700">
                { desc }
            </h2>
        </div>
    )
}