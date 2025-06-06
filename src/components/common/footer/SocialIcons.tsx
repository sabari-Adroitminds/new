// components/Footer/SocialIcons.tsx
import IconFacebook from "@/components/icons/socialMedia/IconFacebook";
import IconInstagram from "@/components/icons/socialMedia/IconInstagram";
import IconLinkedin from "@/components/icons/socialMedia/IconLinkedIn";
import IconPinterest from "@/components/icons/socialMedia/IconPintrest";
import IconTikTok from "@/components/icons/socialMedia/IconTiktok";
import IconYoutube from "@/components/icons/socialMedia/IconYoutube";
import React from "react";

const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-4 text-p">
      <IconLinkedin className="hover:text-white cursor-pointer w-[40px] h-[40px]" />
            <IconYoutube  className="hover:text-white cursor-pointer w-[40px] h-[40px]" />
            <IconInstagram pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer w-[40px] h-[40px]" />
            <IconTikTok pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />
            <IconFacebook pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />
            <IconPinterest pathFill="white" rectFill="#A6D8F61A" className="hover:text-white cursor-pointer  w-[40px] h-[40px]" />
        </div>
    );
};

export default SocialIcons;
