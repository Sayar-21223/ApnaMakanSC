import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const loadVoiceflowChatbot = () => {
            const script = document.createElement('script');
            script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            script.type = "text/javascript";
            script.onload = () => {
                window.voiceflow.chat.load({
                    verify: { projectID: '66a7965e0cf2e890e24fb934' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                });
            };
            document.body.appendChild(script);
        };

        loadVoiceflowChatbot();
    }, []);

    return (
        <div className="chatbot-container">
            <div id="voiceflow-chat" style={{ position: 'fixed', bottom: '0', right: '0' }}>
                {/* The Voiceflow chatbot will load in this div */}
            </div>
        </div>
    );
};

export default Chatbot;
