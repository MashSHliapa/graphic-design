import express from 'express';
import cors from 'cors';

const PORT = 8011;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/images', (req, res) => {
  res.json({
    logo: [
      {
        id: 1,
        image: 'https://i.ibb.co/MBvMd87/logo1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/PmJr1CC/logo2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/0DQhhxn/logo3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/mt5DFRG/logo4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/K5HFBfv/logo5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/hMD8ZWz/logo6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/YZmxfvf/logo7.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/48PKD3q/logo8.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/Jvr5GJW/logo9.jpg',
      },
    ],

    cutaways: [
      {
        id: 1,
        image: 'https://i.ibb.co/RgpR5Bc/cutaway1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/q5R3dyB/cutaway2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/F5bMDZj/cutaway3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/SRGC8LK/cutaway4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/BfXx400/cutaway5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/rsY0zqc/cutaway6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/Y8FSqf0/cutaway7.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/S01DK4w/cutaway8.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/0FzPDdR/cutaway9.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/c6Q6mtp/cutaway10.jpg',
      },
      {
        id: 11,
        image: 'https://i.ibb.co/4sphpB8/cutaway11.jpg',
      },
      {
        id: 12,
        image: 'https://i.ibb.co/fMBcdCT/cutaway12.jpg',
      },
    ],

    flyers: [
      {
        id: 1,
        image: 'https://i.ibb.co/3Y0RsPj/flyer1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/Dr6FrmL/flyer2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/ZW64tQS/flyer3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/khNDR65/flyer4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/ck8xXmc/flyer5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/88brpXq/flyer6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/c8NSJFC/flyer7.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/J5npppQ/flyer8.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/0Brd87j/flyer9.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/3fyW77K/flyer10.jpg',
      },
    ],

    priceMenuNotebooks: [
      {
        id: 1,
        image: 'https://i.ibb.co/t48CXs5/price1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/HC8rmSP/price2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/HhvD7gm/price3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/W5ZFJCp/menu1.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/wsFVdqL/menu2.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/MSZ4bG0/menu3.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/ckf9TrS/menu4.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/YtXXykg/menu5.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/T8NDTG8/menu6.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/26BqsvQ/menu7.jpg',
      },
      {
        id: 11,
        image: 'https://i.ibb.co/g7XLwxT/menu8.jpg',
      },
      {
        id: 12,
        image: 'https://i.ibb.co/9hXRLKH/menu9.jpg',
      },
      {
        id: 13,
        image: 'https://i.ibb.co/VpPsGg2/menu10.jpg',
      },
      {
        id: 14,
        image: 'https://i.ibb.co/XLHbW1T/menu11.jpg',
      },
      {
        id: 15,
        image: 'https://i.ibb.co/MDtWGfh/menu12.jpg',
      },
      {
        id: 16,
        image: 'https://i.ibb.co/d7k7zNL/notebook1.jpg',
      },
      {
        id: 17,
        image: 'https://i.ibb.co/P4sZ4xQ/notebook2.jpg',
      },
      {
        id: 18,
        image: 'https://i.ibb.co/VHG0VmY/notebook3.jpg',
      },
      {
        id: 19,
        image: 'https://i.ibb.co/Jjh934G/notebook4.jpg',
      },
      {
        id: 20,
        image: 'https://i.ibb.co/Z2KCvc1/notebook5.jpg',
      },
      {
        id: 21,
        image: 'https://i.ibb.co/59ycfTk/notebook6.jpg',
      },
    ],

    diplomasAndCertificates: [
      {
        id: 1,
        image: 'https://i.ibb.co/cJjygPT/diploma1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/x1M0L6g/diploma2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/TYnpwkb/diploma3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/2hP7XvP/diploma4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/fr2n0kK/diploma5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/QCwhwNY/diploma6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/XDd7G2q/certificate1.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/pvKQJWg/certificate2.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/Msst2tN/certificate3.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/R6ZCNMB/certificate4.jpg',
      },
      {
        id: 11,
        image: 'https://i.ibb.co/D8yg9Sk/certificate5.jpg',
      },
      {
        id: 12,
        image: 'https://i.ibb.co/kKzYQpm/certificate6.jpg',
      },
      {
        id: 13,
        image: 'https://i.ibb.co/HT3gnPT/certificate7.jpg',
      },
    ],

    infographicsPostsStories: [
      {
        id: 1,
        image: 'https://i.ibb.co/TBtRTYr/stories1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/TPQjFsv/stories2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/WWcVPQS/stories3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/q0B2K4d/stories4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/sFKr4v1/stories5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/rGpT7bF/stories6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/TH2zFWm/stories7.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/jMgwn9K/stories8.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/qJWc7kt/stories9.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/YZk7GvX/stories10.jpg',
      },
      {
        id: 11,
        image: 'https://i.ibb.co/wLvDPxy/infographics1.jpg',
      },
      {
        id: 12,
        image: 'https://i.ibb.co/X3zH7fN/infographics2.jpg',
      },
      {
        id: 13,
        image: 'https://i.ibb.co/X2CV4Nr/infographics3.jpg',
      },
      {
        id: 14,
        image: 'https://i.ibb.co/x5XDg7y/infographics4.jpg',
      },
      {
        id: 15,
        image: 'https://i.ibb.co/qCvCtPB/infographics5.jpg',
      },
      {
        id: 16,
        image: 'https://i.ibb.co/wLYJp40/infographics6.jpg',
      },
      {
        id: 17,
        image: 'https://i.ibb.co/N321v5W/infographics7.jpg',
      },
      {
        id: 18,
        image: 'https://i.ibb.co/SrHBTng/infographics8.jpg',
      },
      {
        id: 19,
        image: 'https://i.ibb.co/2sV6z69/infographics9.jpg',
      },
      {
        id: 20,
        image: 'https://i.ibb.co/XtTwxHq/infographics10.jpg',
      },
      {
        id: 21,
        image: 'https://i.ibb.co/g77pGNc/infographics11.jpg',
      },
      {
        id: 22,
        image: 'https://i.ibb.co/d6Ts91x/infographics12.jpg',
      },
    ],

    stickersAndTags: [
      {
        id: 1,
        image: 'https://i.ibb.co/QPLQV41/sticker1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/NCFWbMn/sticker2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/xDQx0gH/sticker3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/hfB0Cps/sticker4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/WpP6Rxw/sticker5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/Zmmw4Qw/sticker6.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/mRJ5kt2/sticker7.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/xq2M4Bh/sticker8.jpg',
      },
      {
        id: 9,
        image: 'https://i.ibb.co/7vKY00q/sticker9.jpg',
      },
      {
        id: 10,
        image: 'https://i.ibb.co/5nphmgb/sticker10.jpg',
      },
    ],

    postersAndBanners: [
      {
        id: 1,
        image: 'https://i.ibb.co/xMVR9rL/poster1.jpg',
      },
      {
        id: 2,
        image: 'https://i.ibb.co/j3ptsSh/poster2.jpg',
      },
      {
        id: 3,
        image: 'https://i.ibb.co/3BnvFpj/poster3.jpg',
      },
      {
        id: 4,
        image: 'https://i.ibb.co/ZMWhx8d/poster4.jpg',
      },
      {
        id: 5,
        image: 'https://i.ibb.co/4R47M97/poster5.jpg',
      },
      {
        id: 6,
        image: 'https://i.ibb.co/SxGDRSW/banner1.jpg',
      },
      {
        id: 7,
        image: 'https://i.ibb.co/F3V4zzb/banner2.jpg',
      },
      {
        id: 8,
        image: 'https://i.ibb.co/q98RTLH/banner3.jpg',
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
