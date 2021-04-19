import PropTypes from 'prop-types';

import { IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';

import styled, { css } from 'styled-components/macro';
import { resetButton, resetList } from 'src/styled/helpers';

const TabsList = styled.ul`
  ${resetList};

  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid var(--background-separator);
`;

const TabItem = styled.li`
  padding: 0 calc(var(--gutter) / 2);
`;

const TabButton = styled.button`
  ${resetButton};

  width: calc(var(--gutter) * 3);
  height: calc(var(--gutter) * 3);
  display: flex;
  color: var(--label-color-secondary);
  outline: none;

  ${({ isActive }) => isActive && css`
    color: var(--system-accent);
  `}

  .icon {
    margin: auto;
    pointer-events: none;
  }
`;

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
