import './PageHeader.css'
export const PageHeader = ({ onGoBack, text }) => {

    return (<div onClick={onGoBack} className="page-header-wrapper">
        {onGoBack && <div className="button-back">{`<`}</div>}
        <div className="header-text">{text || '***'}</div>
    </div>);
}