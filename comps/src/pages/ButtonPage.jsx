import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-5">
          <GoBell className="mr-1" />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary>Something!</Button>
      </div>
    </>
  );
}

export default ButtonPage;
