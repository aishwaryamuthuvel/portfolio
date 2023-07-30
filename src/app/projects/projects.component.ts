import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projectList = [
    {
      "title": "Invertible Recurrent Inference Machine (iRIM) for low-dose CT reconstruction",
      "id": "project1", "class": "project",
      "skills": ["Computed Tomography (CT)", "PyTorch", "Deep Learning", "Medical Image Analysis", "iRIM", "RNN"],
      "desc": "Following its success in undersampled MRI reconstruction, an iRIM model was modified and trained " +
        "for low-dose CT reconstruction. The model recorded great performance and is currently ranked second in the ",
      "show": true
    },

    {
      "title": "Blood Vessel Segmentation from Retinal Fundus Images",
      "id": "project2", "class": "project",
      "skills": ["Deep Learning", "Medical Image Analysis", "U-Nets", "Keras", "Image segmentation", "Retinal Fundus Images"],
      "desc": "Developed a U-Net with added boundary enhancement and feature denoising modules to segment out the retinal " +
        "vasculature from its fundus image. Built a classification model on top to classify the segmented pixels into arteries and veins.",
      "show": false
    },

    {
      "title": "Anti-spoofing algorithm for face recognition systems based on pupil response",
      "id": "project3", "class": "project",
      "skills": ["MATLAB", "Fast Radial Transform", "Liveness detection based on pupil response", "Pupil Detection"],
      "desc": "This project aimed at using image processing algorithms to calculate the area of the pupils in the input images captured in " +
        "different light settings. These pupil areas are analysed to detect the liveliness of the subject during face recognition.",
      "show": false
    },

    {
      "title": "Atrial Fibrillation (AF) episode Detection from ECG signals",
      "id": "project4", "class": "project",
      "skills": ["Dimensionality reduction", "Neural Networks", "Support Vector Machines", "Decision Trees"],
      "desc": "AF is a heart condition caused due to irregularity in the beating of the atrial chambers. An AF episode detection model was " +
        "trained on a dataset that was created using the R-R interval lengths extracted from the ECG signals of the patients.",
      "show": false
    },

    {
      "title": "Ghost fingerprint Detection",
      "id": "project4", "class": "project",
      "skills": ["MATLAB", "Neural Networks", "K-nearest neighbours", "Random Forest", "Local frequency and orientation estimation",
        "Fast Fourier Transform"],
      "desc": "Fingerprint images collected might be corrupted by remnants from the previous fingerprints. " +
        "These are termed ghost fingerprints. The input image is divided into blocks and features based on " +
        "the local orientation, frequency and mean pixel intensity were extracted from it. Classification " +
        "models were trained on the features extracted to detect the presence of ghost prints in the input.",
      "show": false
    },

    {
      "title": "Gender Detection through Speech Processing",
      "id": "project4", "class": "project",
      "skills": ["Neural Networks", "Support Vector Machines", "Gaussian Mixture Models",],
      "desc": "The acoustic features of an input speech signal were extracted using the MFCC algorithm. The extracted 12 MFCC " +
        "coefficients were used as features to train machine learning models to detect the gender of the speaker.",
      "show": false
    },

    {
      "title": "Text Summarization",
      "id": "project4", "class": "project",
      "skills": ["Extractive summarization", "Word2vec", "Logistic regression"],
      "desc": "The aim is to create a summary of the input text by identifying the most relevant information. " +
        "A logistic regression model was trained to score each sentence based on features like the similarity " +
        "between the Word2vec model vectors of the sentence and the input text, its length and position in the " +
        "input text. The top scored sentences were then used to create the summary.",
      "show": false
    },

    {
      "title": "Man Overboard",
      "id": "project4", "class": "project",
      "skills": ["MATLAB", "Optic Flow Motion model", "Object Tracking", "Distance estimation"],
      "desc": "The Man Overboard project, designed to help rescue missions, aims to track a test buoy in a video of it floating on rough " +
        "waters given its initial position and then estimate its distance from the camera in meters.",
      "show": false
    },

  ]

}
