import React from 'react'
import { IconLink, Cell, Row, Table } from '../common'
import { Avatar, Info, User } from './Elements'
import { IDS, signatureInfo, signatureStyle, formatNumber } from '../../utils'


export const SignTeam = ({ formData, language }) => {

    return (
        <div style={{
            background: 'white',
            padding: '1rem 2rem',
            boxShadow: '0px 2px 2px 2px rgba(204, 204, 204, 0.1)',
        }}>
            <Table className="signature" w={340}>
                <Row>
                    {/* LEFT */}
                    <Cell position="top" w={137}>
                        <Table>
                            <Row h={120}>
                                <Cell h={120}>
                                    <Table>
                                        <Row>
                                            <Cell h={120} w={120}>
                                                <Avatar
                                                    src={formData.profile ? formData.profile : signatureInfo.illustrations.avatar.src}
                                                    alt={signatureInfo.illustrations.avatar.alt}
                                                    width={signatureStyle.illustrations.profile.width}
                                                    height={signatureStyle.illustrations.profile.height}
                                                />
                                            </Cell>
                                        </Row>
                                    </Table>
                                </Cell>
                            </Row>
                            <Row h={signatureStyle.rowGap.xl} />
                            <Row h={40}>
                                <Cell position="bottom">
                                    <Table>
                                        <Row>
                                            <Cell h={40} w={65}>
                                                <IconLink
                                                    width={signatureStyle.illustrations.logo.width}
                                                    src={signatureInfo.illustrations.logo.src}
                                                    alt={signatureInfo.illustrations.logo.alt}
                                                    link={signatureInfo.illustrations.logo.link}

                                                />
                                            </Cell>
                                            <Cell w={signatureStyle.cellGap.md} />
                                            <Cell>
                                                <Table>
                                                    <Row>
                                                        {
                                                            signatureInfo.illustrations.iconLinks.top.map((icon, index) => (
                                                                <React.Fragment key={icon.id}>
                                                                    <Cell h={18} w={18}>
                                                                        <IconLink
                                                                            width={signatureStyle.illustrations.icons.square_md}
                                                                            height={signatureStyle.illustrations.icons.square_md}
                                                                            src={icon.src}
                                                                            alt={icon.alt}
                                                                            link={icon.link}

                                                                        />
                                                                    </Cell>
                                                                    {index !== signatureInfo.illustrations.iconLinks.top.length - 1 && <Cell w={signatureStyle.cellGap.sm} />}
                                                                </React.Fragment>
                                                            ))
                                                        }
                                                    </Row>
                                                    <Row h={signatureStyle.rowGap.sm} />
                                                    <Row>
                                                        {
                                                            signatureInfo.illustrations.iconLinks.bottom.map((icon, index) => (
                                                                <React.Fragment key={icon.id}>
                                                                    <Cell h={18} w={18}>
                                                                        <IconLink
                                                                            width={signatureStyle.illustrations.icons.square_md}
                                                                            height={signatureStyle.illustrations.icons.square_md}
                                                                            src={icon.src}
                                                                            alt={icon.alt}
                                                                            link={icon.link}

                                                                        />
                                                                    </Cell>
                                                                    {index !== signatureInfo.illustrations.iconLinks.bottom.length - 1 && <Cell w={signatureStyle.cellGap.sm} />}
                                                                </React.Fragment>
                                                            ))
                                                        }
                                                    </Row>
                                                </Table>
                                            </Cell>
                                        </Row>
                                    </Table>
                                </Cell>
                            </Row>
                        </Table>
                    </Cell>

                    {/* RIGHT */}

                    <Cell position="bottom">
                        <Table>
                            <Row>
                                <Cell position="middle" >
                                    {
                                        signatureInfo.userInfo.name.map((info) => (
                                            <User
                                                key={info.id}
                                                fontFamily={signatureStyle.fontFamily}
                                                fontSize={18}
                                                lineHeight={20}
                                                color={info.id === IDS.FIRSTNAME ? signatureStyle.info.user.color.firstname : signatureStyle.info.user.color.lastname}
                                            >
                                                {
                                                    info.id === IDS.FIRSTNAME
                                                        ? (formData.firstname ? formData.firstname : info.LANG[language.index].placeHolder)
                                                        : (formData.lastname ? formData.lastname : info.LANG[language.index].placeHolder)
                                                }
                                            </User>
                                        ))
                                    }
                                </Cell>
                            </Row>
                            <Row h={signatureStyle.rowGap.mdx} />
                            <Row>
                                <Cell>
                                    <Table>
                                        <Row>
                                            <Cell w={signatureStyle.cellGap.lg} />
                                            <Cell borderLeft="3px solid #201747" />
                                            <Cell w={signatureStyle.cellGap.lg} />
                                            <Cell>
                                                <Table>
                                                    <Row>
                                                        <Cell w={162} h={14} position="top" center="center">
                                                            <Info
                                                                fontFamily={signatureStyle.fontFamily}
                                                                fontSize={signatureStyle.info.info_contact.fontSize}
                                                                lsp={signatureStyle.info.info_contact.lsp}
                                                                lineHeight={14}
                                                                width={162}
                                                                alignText="left"
                                                                colorText="rgba(32, 23, 71, 0.8)"
                                                            >
                                                                {formData.poste ? formData.poste : signatureInfo.userInfo.poste.LANG[language.index].placeHolder}
                                                            </Info>
                                                        </Cell>
                                                    </Row>
                                                    <Row h={2} />
                                                    {signatureInfo.illustrations.iconContacts_team.map((icon, index) => (
                                                        <Row key={icon.id}>
                                                            <Cell>
                                                                <Table>
                                                                    <Row>
                                                                        <Cell h={22} w={22} position={"middle"}>
                                                                            <IconLink
                                                                                width={signatureStyle.illustrations.icons.square_lg}
                                                                                src={icon.src}
                                                                                alt={icon.alt}

                                                                            />
                                                                        </Cell>
                                                                        <Cell w={signatureStyle.cellGap.md} />
                                                                        <Cell position="middle" w={icon.id === IDS.TELEPHONE_ICON ? 78 : 130}>
                                                                            <Info
                                                                                fontFamily={signatureStyle.fontFamily}
                                                                                fontSize={signatureStyle.info.info_contact.fontSize}
                                                                                lineHeight={signatureStyle.info.info_contact.lineHeight}
                                                                                width={icon.id === IDS.TELEPHONE_ICON ? 105 : 130}
                                                                                transformText="capitalize"

                                                                            >
                                                                                {
                                                                                    icon.id === IDS.TELEPHONE_ICON ?
                                                                                        // (formData.telephone ?
                                                                                        //     (<a
                                                                                        //         href={`tel:${formData.telephone}`}
                                                                                        //         target="_blank"
                                                                                        //         role="Telephone Number"
                                                                                        //         style={{ textDecoration: "none", color: "#201747" }}
                                                                                        //     >
                                                                                        //         {formData.telephone.replace(/(.{2})/g, '$& ',)}
                                                                                        //     </a>) : signatureInfo.userInfo.contact.LANG[language.index].placeHolder
                                                                                        // )


                                                                                        (icon.id === IDS.TELEPHONE_ICON ?
                                                                                            (formData.telephone ?
                                                                                                (<a
                                                                                                    href={`tel:+${formData.phonearea}${formData.telephone}`}
                                                                                                    target="_blank"
                                                                                                    role="Telephone Number"
                                                                                                    style={{ textDecoration: "none", color: "#201747" }}
                                                                                                >
                                                                                                    {`+${formData.phonearea} `}
                                                                                                    {/* {setPhoneNumber(formData.telephone)} */}
                                                                                                    {formatNumber(formData.telephone, formData.phonearea)}
                                                                                                </a>) :
                                                                                                ((formData.phonearea ? `+${formData.phonearea} ` : "+XX ") + signatureInfo.userInfo.contact.LANG[language.index].placeHolder)
                                                                                            )
                                                                                            : (formData.activity ? formData.activity : signatureInfo.userInfo.contact.placeHolder_Loc)
                                                                                        )

                                                                                        : icon.id === IDS.LOCATION_ICON ?
                                                                                            (formData.activity ? formData.activity : signatureInfo.userInfo.contact.placeHolder_Loc)
                                                                                            : (<a
                                                                                                href={signatureInfo.userInfo.contact.internet_link}
                                                                                                target="_blank"
                                                                                                style={{ cursor: "pointer", color: "rgba(0, 106, 204, 1)", textDecoration: "underline", textTransform: "lowercase" }}>
                                                                                                {signatureInfo.userInfo.contact.placeHolder_Link}
                                                                                            </a>)
                                                                                }
                                                                            </Info>
                                                                        </Cell>
                                                                    </Row>
                                                                    {index !== signatureInfo.illustrations.iconContacts_team.length - 1 && <Row h={2} />}
                                                                </Table>
                                                            </Cell>
                                                        </Row>
                                                    ))}
                                                </Table>
                                            </Cell>
                                        </Row>
                                    </Table>
                                </Cell>
                            </Row>
                        </Table>
                    </Cell>
                </Row>
            </Table>
        </div >
    )
}