using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 03/24/2022 06:30 am - SSN - Copied from C:\Sams_Projects\Training\WindowsFormsApp_Testing\Drawings

namespace SSN_TextToImageLib.Drawings
{
    public partial class GenerateImageFromText
    {



        public MemoryStream GenerateDrawingFromText_AsStream(string text)
        {
            Image image = GenerateDrawingFromText_AsBMP(text);
            MemoryStream ms = new MemoryStream();
            image.Save(ms, System.Drawing.Imaging.ImageFormat.Bmp);
            return ms;
        }

        // https://stackoverflow.com/questions/2070365/how-to-generate-an-image-from-text-on-fly-at-runtime
        public Image GenerateDrawingFromText_AsBMP(string text, Font font = null, Color backColor = default, Color textColor = default)
        {
            if (font == null)
            {
                font = new Font("Verdana", 10f);
            }

            if ( textColor == default)  // Cannot defalut parameter "Must be a compiler-time constance
            {
                textColor = Color.White;
            }

            Image image = new Bitmap(1, 1);

            Graphics drawing = Graphics.FromImage(image);

            SizeF textSize = drawing.MeasureString(text, font);

            image.Dispose();
            drawing.Dispose();

            image = new Bitmap((int)textSize.Width, (int)textSize.Height);

            drawing = Graphics.FromImage(image);

            drawing.Clear(backColor);


            Brush textBrush = new SolidBrush(textColor);


            drawing.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;

            drawing.DrawString(text, font, textBrush, 0, 0);
            drawing.Save();

            textBrush.Dispose();
            drawing.Dispose();

            return image;

        }
        // ssn-todo

        // https://stackoverflow.com/questions/6311545/c-sharp-write-text-on-bitmap

    }
}
