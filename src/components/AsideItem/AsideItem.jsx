import "./AsideItem.css"

const AsideItem = ({href, children}) => {
    return (
        <li className="aside_item">
            <a href={href}>{children}</a>
        </li>
    )
}

export default AsideItem