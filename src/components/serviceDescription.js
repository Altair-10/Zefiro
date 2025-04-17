export default function ServiceDescription({ desc }) {
    return (
        <div className="h-auto flex justify-center items-center mx-[8vw] mt-6">
            <h2 className="text-center text-gray-700">
                { desc }
            </h2>
        </div>
    )
}