import clsx from 'clsx'
import { Button } from '@/components/ui/button'
import PreTitle from '@/components/common/PreTitle'
import { HeroImageCardProps } from '@/types/interfaces'
import Image from 'next/image'



export default function HeroImageCard({
  title,
  subtitle,
  description,
  descriptionForSmallScreens,
  buttonText,
  bgColorClass = 'bg-primary-light',
  titleColorClass = 'text-navy',
  subtitleColorClass = 'text-primary', 
  descriptionColorClass = 'text-navy/80',
  buttonColorClass = 'primary',

  image
}: HeroImageCardProps) {
  return (
    <div className={clsx(bgColorClass, '3xl:w-[1600px] 2xl:w-[1280px] xl:w-[1080px] lg:w-[980px] md:w-[600px] rounded-xl h-full')}>
      <div className="  flex  flex-col-reverse lg:flex-row items-center justify-around md:justify-between ">
        {/* Text Section */}
        <div className="flex xl:flex-4/12 items-center justify-center md:w-[550px] w-[366px] max-h-[80vh] h-[273px] p-[30px] align-center ">
          <div className="lg:w-[421px] w-full flex flex-col items-center lg:items-start justify-center px-4 gap-6 md:text-left mb-8 md:mb-0">
            {subtitle && (
              <PreTitle className='hidden lg:flex' title={subtitle} color={subtitleColorClass} />
            )}
            <p className={clsx(' text-[32px] leading-[32px] md:text-[45px] md:leading-[45px] lg:text-[70px] lg:leading-[70px] font-[500] text-center lg:text-start', titleColorClass)}>
              {title}
            </p>
            <p className='text-[14px] md:text-[16px] font-medium  text-navy/80  hidden lg:block'>

              {description}
            </p>
            <p className={clsx('text-[14px] md:text-lg text-center lg:hidden block', descriptionColorClass)}>
              {descriptionForSmallScreens}
            </p>
            <Button
              variant={buttonColorClass}
              className='h-[50px] w-fit text-[18px]  min-w-[150px] px-4'
            >
              {buttonText}
            </Button>
          </div>
        </div>
        {/* Image Section */}

        <Image
        width={1080}
        height={720}
          src={image}
          alt={title}
          className="object-cover w-full lg:h-[851px] md:h-[500px] max-h-[80vh] h-[380px]  "
         priority
          placeholder="blur"
          blurDataURL="/images/blurImage.jpg"
          loading="eager"
        />

      </div>
    </div>
  )
}
