import PropTypes from 'prop-types';

import Icon from 'src/components/icon';

import { TabsList, TabItem, TabButton } from './style';

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <TabsList>
      {tabs.map((tab) => (
        <TabItem key={tab.id}>
          <TabButton
            id={tab.id}
            onClick={onTabClick}
            isActive={tab.id === activeTab}
            aria-label={tab.name}
            type="button"
          >
            <Icon icon={tab.icon} />
          </TabButton>
        </TabItem>
      ))}
    </TabsList>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
