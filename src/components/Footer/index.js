import React from 'react'
import { Flex } from 'rebass'

import Link from '../Link'

const links = [
  { url: 'https://nevellus.com', text: 'About' },
  { url: 'https://docs.nevellus.com/', text: 'Docs' },
  { url: 'https://github.com/Nevellus/nevellusswap-info', text: 'Code' },
]

const FooterLink = ({ children, ...rest }) => (
  <Link external color="nevellusPink" fontWeight={500} fontSize={12} mr={'8px'} {...rest}>
    {children}
  </Link>
)

const Footer = () => (
  <Flex as="footer" p={24}>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.url}>
        {link.text}
      </FooterLink>
    ))}
  </Flex>
)

export default Footer
