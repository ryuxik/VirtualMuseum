import { React } from 'react';
import { Link } from 'react-router-dom'

const PreviewCard = (props) => {
    const { link, callToAction, content } = props;

    return (
        <Link to={link}>
            <div className="preview-card">
                <div className="preview-card-cta">
                    {callToAction}
                </div>
                <div className="preview-card-content">
                    {content}
                </div>
            </div>
        </Link>
    );
}

export default PreviewCard;