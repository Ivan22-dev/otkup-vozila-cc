import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ModalSection = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <React.Fragment>
            <ModalVideo
                channel={props.channel}
                isOpen={isOpen}
                videoId={props.videoId}
                onClose={() => setIsOpen(false)}
            />
        </React.Fragment>
    );
};

export default ModalSection;
