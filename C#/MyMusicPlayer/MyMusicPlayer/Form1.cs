using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MyMusicPlayer
{
    public partial class MP3 : Form
    {
        public MP3()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (openFileDialog1.ShowDialog()==DialogResult.OK)
            {
                textBox1.Text = openFileDialog1.FileName;
            }
            Player.URL = textBox1.Text;
        }

        private void button6_Click(object sender, EventArgs e)
        {
            Player.Ctlcontrols.play();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Player.Ctlcontrols.pause();

        }

        private void button4_Click(object sender, EventArgs e)
        {
            Player.Ctlcontrols.stop();

        }

        private void MP3_Load(object sender, EventArgs e)
        {

        }

        private void button5_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
