import * as React from 'react';

/*
    Credit https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69 for original
    js files, edited by Robert McDonnell to convert to typescript
*/

export default class Tabs extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            activeTabIndex: 0,
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex: number) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.state.activeTabIndex : tabIndex
        });
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child: any, index) => {
            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {         
        if (this.state.activeTabIndex !== undefined) {
            const {children} = this.props;
            const {activeTabIndex} = this.state;
            if (children != null) {
                if (children[activeTabIndex]) {
                    return children[activeTabIndex].props.children;
                }
            } else {
                console.dir('Error! This tab has no children!');
            }
        }
    }

    render() {
        return (
            <div className="tabs">
                <ul className="tabs-nav nav navbar-nav navbar-offices">
                    {this.renderChildrenWithTabsApiAsProps()}
                </ul>
                <div className="tabs-active-content">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
}