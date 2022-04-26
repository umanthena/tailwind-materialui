import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

import './header.css';


const StyledHeader = styled.header(() => [
  tw`md:flex md:items-center md:justify-between px-4 py-4 bg-blue-600`,
]);

const HeaderInfo = styled.div(() => [
  tw`flex-1 flex items-center justify-between`,
]);

const UserName = styled.div(() => [
  tw`text-white text-lg`,
]);

const HeaderTitle = styled.h2(() => [
  tw`text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate`,
]);

const HeaderActions = styled.div(() => [
  tw`mt-4 flex md:mt-0 md:ml-4`,
]);

const ActionButton = styled.button(({ isPrimary, marginLeft }) => [
  tw`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`,
  isPrimary ? tw`border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500` :
    tw`border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
  marginLeft && tw`ml-2`,
])

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <StyledHeader>
      <HeaderInfo>
        <HeaderTitle>News</HeaderTitle>
        {user?.name && (
          <UserName>Hello, {user.name}</UserName>
        )}
      </HeaderInfo>
      <HeaderActions>
        {user ? (
          <ActionButton type="button" isPrimary onClick={onLogout}>
            Log out
          </ActionButton>
        ) : (
          <>
            <ActionButton type="button" isPrimary onClick={onLogin}>
              Login
            </ActionButton>
            <ActionButton type="button" marginLeft onClick={onCreateAccount}>
              Sign up
            </ActionButton>
          </>
        )}
      </HeaderActions>
    </StyledHeader>
  );
}

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
