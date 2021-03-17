import { Platform } from 'react-native';

const buildImageSource = (iosSrc: string, androidSrc: string): { uri: string } => {
    return { uri: Platform.OS === 'ios' ? iosSrc : androidSrc };
};

export const Images = {
    // Backgrounds
    backgroundPattern: global.theme === 'light'
        ? buildImageSource('BackgroundPattern', 'background_pattern')
        : buildImageSource('BackgroundPatternLight', 'background_pattern'),
    BackgroundShapes: buildImageSource('BackgroundShapes', 'background_shapes'),
    // Visuals
    ImageFirstAccount: global.theme === 'light'
        ? buildImageSource('ImageFirstAccount', 'image_first_account')
        : buildImageSource('ImageFirstAccountLight', 'image_first_account'),
    ImageNoEvents: global.theme === 'light'
        ? buildImageSource('ImageNoEvents', 'image_no_events')
        : buildImageSource('ImageNoEventsLight', 'image_no_events'),
    ImageProfile: global.theme === 'light'
        ? buildImageSource('ImageProfile', 'image_profile')
        : buildImageSource('ImageProfileLight', 'image_profile'),
    ImageNoContacts: global.theme === 'light'
        ? buildImageSource('ImageNoContacts', 'image_no_contacts')
        : buildImageSource('ImageNoContactsLight', 'image_no_contacts'),
    ImageAddAccount: global.theme === 'light'
        ? buildImageSource('ImageAddAccount', 'image_add_account')
        : buildImageSource('ImageAddAccountLight', 'image_add_account'),
    ImageNewAccount: global.theme === 'light'
        ? buildImageSource('ImageNewAccount', 'image_new_account')
        : buildImageSource('ImageNewAccountLight', 'image_new_account'),
    ImageSecretWarning: global.theme === 'light'
        ? buildImageSource('ImageSecretWarning', 'image_secret_warning')
        : buildImageSource('ImageSecretWarningLight', 'image_secret_warning'),
    ImageManageAccounts: global.theme === 'light'
        ? buildImageSource('ImageManageAccounts', 'image_manage_accounts')
        : buildImageSource('ImageManageAccountsLight', 'image_manage_accounts'),
    ImageSecurityFirst: global.theme === 'light'
        ? buildImageSource('ImageSecurityFirst', 'image_security_first')
        : buildImageSource('ImageSecurityFirstLight', 'image_security_first'),
    ImageSendReceive: global.theme === 'light'
        ? buildImageSource('ImageSendReceive', 'image_send_receive')
        : buildImageSource('ImageSendReceiveLight', 'image_send_receive'),
    ImagePincode: global.theme === 'light'
        ? buildImageSource('ImagePincode', 'image_pincode')
        : buildImageSource('ImagePincodeLight', 'image_pincode_light'),
    ImageBiometric: global.theme === 'light'
        ? buildImageSource('ImageBiometric', 'image_biometric')
        : buildImageSource('ImageBiometricLight', 'image_biometric'),
    ImageNotifications: global.theme === 'light'
        ? buildImageSource('ImageNotifications', 'image_notifications')
        : buildImageSource('ImageNotificationsLight', 'image_notifications_light'),
    ImageComplete: global.theme === 'light'
        ? buildImageSource('ImageComplete', 'image_complete')
        : buildImageSource('ImageCompleteLight', 'image_complete'),
    ImageCloudAlert: global.theme === 'light'
        ? buildImageSource('ImageCloudAlert', 'image_cloud_alert')
        : buildImageSource('ImageCloudAlertLight', 'image_cloud_alert'),
    ImageWarningShield: global.theme === 'light'
        ? buildImageSource('ImageWarningShield', 'image_warning_shield')
        : buildImageSource('ImageWarningShieldLight', 'image_warning_shield'),
    ImageCoinWallet: global.theme === 'light'
        ? buildImageSource('ImageCoinWallet', 'image_coin_wallet')
        : buildImageSource('ImageCoinWalletLight', 'image_coin_wallet'),
    // Xumm
    xummLogo: global.theme === 'light'
        ? buildImageSource('XummLogo', 'xumm_logo')
        : buildImageSource('XummLogoLight', 'xumm_logo_light'),
    xummIcon: global.theme === 'light'
        ? buildImageSource('XummIcon', 'xumm_icon')
        : buildImageSource('XummIconLight', 'xumm_icon_light'),
    SideGradient: buildImageSource('SideGradient', 'side_gradient'),
    // Icons
    IconTabBarHome: buildImageSource('IconTabBarHome', 'icon_tabbar_home'),
    IconTabBarHomeSelected: global.theme === 'light'
        ? buildImageSource('IconTabBarHomeSelected', 'icon_tabbar_home_selected')
        : buildImageSource('IconTabBarHomeSelectedLight', 'icon_tabbar_home_selected'),
    IconTabBarEvents: buildImageSource('IconTabBarEvents', 'icon_tabbar_events'),
    IconTabBarEventsSelected: global.theme === 'light'
        ? buildImageSource('IconTabBarEventsSelected', 'icon_tabbar_events_selected')
        : buildImageSource('IconTabBarEventsSelectedLight', 'icon_tabbar_events_selected'),
    IconTabBarProfile: buildImageSource('IconTabBarProfile', 'icon_tabbar_profile'),
    IconTabBarProfileSelected: global.theme === 'light'
        ? buildImageSource('IconTabBarProfileSelected', 'icon_tabbar_profile_selected')
        : buildImageSource('IconTabBarProfileSelectedLight', 'icon_tabbar_profile_selected'),
    IconTabBarSettings: buildImageSource('IconTabBarSettings', 'icon_tabbar_settings'),
    IconTabBarSettingsSelected: global.theme === 'light'
        ? buildImageSource('IconTabBarSettingsSelected', 'icon_tabbar_settings_selected')
        : buildImageSource('IconTabBarSettingsSelectedLight', 'icon_tabbar_settings_selected'),
    IconLock: buildImageSource('IconLock', 'icon_lock'),
    IconChevronLeft: buildImageSource('IconChevronLeft', 'icon_chevron_left'),
    IconChevronRight: buildImageSource('IconChevronRight', 'icon_chevron_right'),
    IconShield: buildImageSource('IconShield', 'icon_shield'),
    IconBell: buildImageSource('IconBell', 'icon_bell'),
    IconAccount: buildImageSource('IconAccount', 'icon_account'),
    IconEvents: buildImageSource('IconEvents', 'icon_events'),
    IconEdit: buildImageSource('IconEdit', 'icon_edit'),
    IconProfile: buildImageSource('IconProfile', 'icon_profile'),
    IconScan: buildImageSource('IconScan', 'icon_scan'),
    IconSettings: buildImageSource('IconSettings', 'icon_settings'),
    IconPlus: buildImageSource('IconPlus', 'icon_plus'),
    IconMinus: buildImageSource('IconMinus', 'icon_minus'),
    IconMoreHorizontal: buildImageSource('IconMoreHorizontal', 'icon_more_horizontal'),
    IconMoreVertical: buildImageSource('IconMoreVertical', 'icon_more_vertical'),
    IconTrash: buildImageSource('IconTrash', 'icon_trash'),
    IconEye: buildImageSource('IconEye', 'icon_eye'),
    IconEyeOff: buildImageSource('IconEyeOff', 'icon_eye_off'),
    IconCamera: buildImageSource('IconCamera', 'icon_camera'),
    IconFilter: buildImageSource('IconFilter', 'icon_filter'),
    IconSearch: buildImageSource('IconSearch', 'icon_search'),
    IconCornerRightUp: buildImageSource('IconCornerRightUp', 'icon_corner_right_up'),
    IconCornerLeftUp: buildImageSource('IconCornerLeftUp', 'icon_corner_left_up'),
    IconCornerRightDown: buildImageSource('IconCornerRightDown', 'icon_corner_right_down'),
    IconX: buildImageSource('IconX', 'icon_x'),
    IconBook: buildImageSource('IconBook', 'icon_book'),
    IconSmartPhone: buildImageSource('IconSmartPhone', 'icon_smartphone'),
    IconSlider: buildImageSource('IconSlider', 'icon_sliders'),
    IconActivity: buildImageSource('IconActivity', 'icon_activity'),
    IconXrp: buildImageSource('IconXrp', 'icon_xrp'),
    IconXrpNew: buildImageSource('IconXrpNew', 'icon_xrp_new'),
    IconShare: buildImageSource('IconShare', 'icon_share'),
    IconCheck: buildImageSource('IconCheck', 'icon_check'),
    IconInfo: buildImageSource('IconInfo', 'icon_info'),
    IconChevronDown: buildImageSource('IconChevronDown', 'icon_chevron_down'),
    IconChevronUp: buildImageSource('IconChevronUp', 'icon_chevron_up'),
    IconClipboard: buildImageSource('IconClipboard', 'icon_clipboard'),
    IconFingerprint: buildImageSource('IconFingerprint', 'icon_fingerprint'),
    IconThumbsUp: buildImageSource('IconThumbsUp', 'icon_thumbs_up'),
    IconLink: buildImageSource('IconLink', 'icon_link'),
    IconHelpCircle: buildImageSource('IconHelpCircle', 'icon_help_circle'),
    IconSend: buildImageSource('IconSend', 'icon_send'),
    IconStar: buildImageSource('IconStar', 'icon_star'),
    IconTrustLine: buildImageSource('IconTrustLine', 'icon_trustline'),
    IconRefresh: buildImageSource('IconRefresh', 'icon_refresh'),
    IconRepeat: buildImageSource('IconRepeat', 'icon_repeat'),
    IconKey: buildImageSource('IconKey', 'icon_key'),
    IconSwitchAccount: buildImageSource('IconSwitchAccount', 'icon_switchaccount'),
    IconGlobe: buildImageSource('IconGlobe', 'icon_globe'),
    IconArrowDown: buildImageSource('IconArrowDown', 'icon_arrow_down'),
    IconFileText: buildImageSource('IconFileText', 'icon_file_text'),
    IconQR: buildImageSource('IconQR', 'icon_qr'),
    IconArrowRightLong: buildImageSource('IconArrowRightLong', 'icon_arrow_right_long'),
    IconCheckXumm: buildImageSource('IconCheckXumm', 'icon_check_xumm'),
    IconApps: buildImageSource('IconApps', 'icon_apps'),
    IconTabBarActions: global.theme === 'light'
        ? buildImageSource('IconTabBarActions', 'icon_tabbar_actions')
        : buildImageSource('IconTabBarActionsLight', 'icon_tabbar_actions'),
    IconReorder: buildImageSource('IconReorder', 'icon_reorder'),
    IconReorderHandle: buildImageSource('IconReorderHandle', 'icon_reorder_handle'),
    IconXApps: global.theme === 'light'
        ? buildImageSource('IconXApps', 'icon_xapps')
        : buildImageSource('IconXAppsLight', 'icon_xapps_light'),
    IconXApp: buildImageSource('IconXApp', 'icon_xapp'),
};
