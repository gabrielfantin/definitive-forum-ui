

export default function Thread({title} : { title: string}){
    return <div className='bg-slate-200 rounded-md p-3 hover:bg-slate-300 hover:border-blue-400 hover:cursor-pointer'>{title}</div>
}