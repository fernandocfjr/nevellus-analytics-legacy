import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo_white.svg'

import { BasicLink } from '../Link'
import { useMedia } from 'react-use'

const TitleWrapper = styled.div`
  text-decoration: none;
  z-index: 10;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const NevellusIcon = styled(Link)`
  transition: transform 0.7s ease;
  :hover {
    transform: scale(1.4);
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;
  margin-left: 12px;
  :hover {
    opacity: 1;
  }
`

export default function Title() {
  const history = useHistory()
  const below1080 = useMedia('(max-width: 1080px)')

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center" style={{ justifyContent: 'space-between' }}>
        <RowFixed>
          <NevellusIcon id="link" href="https://nevellus.com">
            <img width={'40px'} src={Logo} alt="logo" />
          </NevellusIcon>
        </RowFixed>
        {below1080 && (
          <RowFixed style={{ alignItems: 'flex-end' }}>
            <BasicLink to="/home">
              <Option activeText={history.location.pathname === '/home' ?? undefined}>Overview</Option>
            </BasicLink>
            <BasicLink to="/tokens">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'tokens' ||
                    history.location.pathname.split('/')[1] === 'token') ??
                  undefined
                }
              >
                Tokens
              </Option>
            </BasicLink>
            <BasicLink to="/pairs">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'pairs' ||
                    history.location.pathname.split('/')[1] === 'pair') ??
                  undefined
                }
              >
                Pairs
              </Option>
            </BasicLink>

            <BasicLink to="/accounts">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'accounts' ||
                    history.location.pathname.split('/')[1] === 'account') ??
                  undefined
                }
              >
                Accounts
              </Option>
            </BasicLink>
          </RowFixed>
        )}
      </Flex>
    </TitleWrapper>
  )
}
