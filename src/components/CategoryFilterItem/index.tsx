interface CategoryFilterItem {
    title: string,
    active?: boolean
}

const CategoryFilterItem = ({ title, active }: CategoryFilterItem) => {
    return (
        <li className={`p-2 ps-6 relative before:block ${active ? 'before:bg-orange-500' : ''} before:border-black before:border before:w-3 before:h-3 before:absolute before:left-1 before:rounded-full before:bottom-3 cursor-pointer hover:bg-slate-200 list-none rounded-sm`}>
            {title}
        </li>
    )
}

export default CategoryFilterItem
