import { memo } from "react";
import { SearchNormal1, Setting4 } from "iconsax-react";
import Logo from "@/components/logo";
import { Sidebar } from "@/components/sidebar";
import Navigation from "../navigation";
import HeaderButtons from "../header-buttons";
import PhoneNumberLink from "../phone-number-link";
import NavigationScroller from "@/components/navigation-scroller";
import InputIcon from "../inputs/Input-icon";
import {
  headerNavigation,
  notificationAction,
  userActions,
  navCategories,
} from "@/constants/navigation.constant";
import SelectBox from "../select-box";
import { DZ, FR, US } from "country-flag-icons/react/3x2";

const Header = () => {
  const languageOptions = [
    {
      value: "en",
      label: "EN",
      icon: <US title="United States" className="h-3 inline" />,
    },
    {
      value: "fr",
      label: "FR",
      icon: <FR title="France" className="h-3 inline" />,
    },
    {
      value: "ar",
      label: "AR",
      icon: <DZ title="Algeria" className="h-3 inline" />,
    },
  ];
  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg">
      {/* Top Header */}
      <header>
        <div className="max-w-8xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            {/* Logo & Search */}
            <div className="flex items-center justify-around flex-grow">
              <Logo
                src="/images/logo-inline.svg"
                className="hidden sm:block h-8 sm:h-10 md:h-12 w-auto"
              />

              <InputIcon
                iconLeft={SearchNormal1}
                iconRight={Setting4}
                isButtonRight={true}
                buttonRightOnClick={() => {}}
                placeholder="Search"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl mr-2"
              />
              <PhoneNumberLink className="hidden lg:block flex-shrink-0" />
            </div>

            {/* Navigation & User Actions */}
            <div className="flex items-center justify-end">
              <Navigation
                navigation={headerNavigation}
                className="hidden lg:block"
              />
              <SelectBox
                options={languageOptions}
                defaultValue="ar"
                className="w-fit flex-shrink-0 mx-2"
              />

              <div className="hidden lg:block ">
                <HeaderButtons actions={notificationAction} />
              </div>

              <Sidebar navigation={headerNavigation}>
                <HeaderButtons
                  actions={[...notificationAction, ...userActions]}
                />
              </Sidebar>
            </div>
          </div>
        </div>
      </header>
      {/* Bottom nav */}
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <NavigationScroller items={navCategories} />
          <HeaderButtons actions={userActions} />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
