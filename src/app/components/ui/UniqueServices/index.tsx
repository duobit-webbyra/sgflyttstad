import Container from '../../essentials/Container';
import Treeline from '../../resources/Treeline';
import MovingSVG from '../../resources/MovingSVG';

export default function UniqueServices() {
  return (
    <>
      <Container className='pb-14 pt-24'>
        <div className='flex w-full flex-col gap-4 xl:flex-row xl:gap-24'>
          <div className='flex w-full flex-col gap-4 xl:w-1/2'>
            <h2 className='text-4xl font-bold leading-tight sm:text-[48px]'>
              Skräddarsydd hjälp för unika behov
            </h2>
            <p className=''>
              Vi förstår att vissa flytt- och städsituationer kräver extra
              omtanke och erfarenhet. Hos oss på SG Flytt & Städ är vi utrustade
              för att hantera de mer speciella fallen med känsla och respekt.
              Oavsett om det gäller hantering och städning av dödsbo, flytt till
              vårdboende, eller tömning och städ av övergivna bostäder, tar vi
              oss an uppdraget med största noggrannhet.
              <br />
              <br />
              Vi erbjuder diskreta och omsorgsfulla tjänster för att underlätta
              i känsliga situationer, där varje steg är planerat för att möta
              både praktiska och emotionella behov. Vårt team har erfarenhet för
              att hantera även de mest utmanande situationerna, så att du kan
              känna dig trygg i varje del av processen.
            </p>
          </div>
          <div className='w-full xl:w-1/2'>
            <MovingSVG />
          </div>
        </div>
      </Container>
      <div className='relative flex flex-col justify-center'>
        <Treeline />
        <div
          className='-mt-4 h-[26px] w-full bg-[#868b82]'
          style={{ mixBlendMode: 'luminosity' }}
        ></div>
      </div>
    </>
  );
}
