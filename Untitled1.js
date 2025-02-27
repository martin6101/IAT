{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyODPVH9Nt+Fe/YCqa6tDT6z",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/martin6101/IAT/blob/main/Untitled1.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "1deLWjXYv80q"
      },
      "outputs": [],
      "source": [
        "define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){\n",
        "\n",
        "\tvar API = new APIConstructor();\n",
        "\t\t  return stiatExtension({\n",
        "\t\t  category : {\n",
        "\t\t    name : 'Black people', //Will appear in the data.\n",
        "\t\t    title : {\n",
        "\t\t      media : {word : 'Black people'}, //Name of the category presented in the task.\n",
        "\t\t      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.\n",
        "\t\t      height : 7 //Used to position the \"Or\" in the combined block.\n",
        "\t\t    },\n",
        "\t\t    media : [ //Stimuli content as PIP's media objects\n",
        "    \t\t    \t{image : 'black1.jpg'},\n",
        "    \t\t\t{image : 'black2.jpg'},\n",
        "    \t\t\t{image : 'black3.jpg'},\n",
        "    \t\t\t{image : 'black4.jpg'},\n",
        "    \t\t\t{image : 'black5.jpg'},\n",
        "    \t\t\t{image : 'black6.jpg'}\n",
        "\t\t    ],\n",
        "\t\t    //Stimulus css (style)\n",
        "\t\t    css : {color:'#31b404','font-size':'3em'}\n",
        "\t\t  },\n",
        "\n",
        "  \t\tattribute1 :\n",
        "\t\t\t{\n",
        "\t\t\tname : 'Unpleasant', //Attribute label\n",
        "\t\t\ttitle : {\n",
        "\t\t\t\tmedia : {word : 'Negative'}, //Name of the category presented in the task.\n",
        "\t\t\t\tcss : {color:'#31b404','font-size':'2em'}, //Style of the category title.\n",
        "\t\t\t\theight : 7 //Used to position the \"Or\" in the combined block.\n",
        "\t\t\t},\n",
        "\t\t\tmedia : [ //Stimuli\n",
        "\t\t\t\t{word: 'Bomb'},\n",
        "\t\t\t\t{word: 'Abuse'},\n",
        "\t\t\t\t{word: 'Sadness'},\n",
        "\t\t\t\t{word: 'Pain'},\n",
        "\t\t\t\t{word: 'Poison'},\n",
        "\t\t\t\t{word: 'Grief'}\n",
        "\t\t\t],\n",
        "\t\t\t//Can change color and size of the targets here.\n",
        "\t\t\tcss : {color:'#31b404','font-size':'3em'}\n",
        "\t\t\t},\n",
        "\t\tattribute2 :\n",
        "\t\t\t{\n",
        "\t\t\tname : 'Pleasant', //Attribute label\n",
        "\t\t\ttitle : {\n",
        "\t\t\t\tmedia : {word : 'Positive'}, //Name of the category presented in the task.\n",
        "\t\t\t\tcss : {color:'#31b404','font-size':'2em'}, //Style of the category title.\n",
        "\t\t\t\theight : 7 //Used to position the \"Or\" in the combined block.\n",
        "\t\t\t},\n",
        "\t\t\tmedia : [ //Stimuli\n",
        "\t\t\t\t{word: 'Paradise'},\n",
        "\t\t\t\t{word: 'Pleasure'},\n",
        "\t\t\t\t{word: 'Cheer'},\n",
        "\t\t\t\t{word: 'Wonderful'},\n",
        "\t\t\t\t{word: 'Splendid'},\n",
        "\t\t\t\t{word: 'Love'}\n",
        "\t\t\t],\n",
        "\t\t\t//Can change color and size of the targets here.\n",
        "\t\t\tcss : {color:'#31b404','font-size':'3em'}\n",
        "\t\t\t},\n",
        "\n",
        "  base_url : {//Where are your images at?\n",
        "    image : 'https://baranan.github.io/minno-tasks/images/'\n",
        "  }}\n",
        "  );\n",
        "  });\n"
      ]
    }
  ]
}