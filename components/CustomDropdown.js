import React from 'react';

const CustomDropdown = () => {
        return (
            CustomDropdown.defaultProps = {
                caret: true,
                hoverColor: "primary"
              };
              
              CustomDropdown.propTypes = {
                hoverColor: PropTypes.oneOf(["primary", "black"]),
                buttonText: PropTypes.node,
                buttonIcon: PropTypes.func,
                dropdownList: PropTypes.array,
                buttonProps: PropTypes.object,
                dropup: PropTypes.bool,
                dropdownHeader: PropTypes.node,
                rtlActive: PropTypes.bool,
                caret: PropTypes.bool,
                left: PropTypes.bool,
                noLiPadding: PropTypes.bool,
                navDropdown: PropTypes.bool,
                // function that retuns the selected item
                onClick: PropTypes.func
              };

            )
        }
export default Services;