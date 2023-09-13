import './MobileContainer.scss'

export const MobileContainer = ({children}) => (
    <div id="mobile-container">
        <div id="mobile-container__content">
            {children}
        </div>
    </div>
)