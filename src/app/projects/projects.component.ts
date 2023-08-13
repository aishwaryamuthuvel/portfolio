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
      "id": "project1", "class": "project", "reportImgShow": true, 
      "reportLink": "http://essay.utwente.nl/86820/1/gurusamymuthuvelrabindran_MA_EEMCS.pdf",
      "skills": ["Computed Tomography (CT)", "PyTorch", "Deep Learning", "Medical Image Analysis", "iRIM", "RNN"],
      "desc": "The invertible recurrent inference machine (iRIM) is a DL model that learns an inference " +
        "algorithm by unrolling it in time and interpreting it as a recurrent neural network (RNN). For my " +
        "master’s thesis, in collaboration with the Computational Imaging group of the University Medical " +
        "Center (UMC), Utrecht, Netherlands, I worked on Deep Learning based Computed Tomography reconstruction " +
        "as a part of their research towards advanced techniques for adaptive radiotherapy. I restructured an " +
        "iRIM model for low-dose CT reconstruction and after training it, tested its generalization capabilities " +
        "across different anatomies, noise levels in the inputs and x-rays source beam geometries. The model’s " +
        "performance is currently ranked second in the LoDoPaB CT Challenge.",
      "show": true, "gitImgShow": false, "subTitle": "Academic project",
      "gitLink": "", "imgUrl": "assets/ct.png",
    },

    {
      "title": "Blood Vessel Segmentation from Retinal Fundus Images",
      "id": "project2", "class": "project", "reportImgShow": true, 
      "reportLink": "https://github.com/aishwaryamuthuvel/vesselSegmentationReport/blob/main/VesselSegmentation_Thirona.pdf",
      "skills": ["Deep Learning", "Medical Image Analysis", "U-Nets", "Keras", "Image segmentation", "Retinal Fundus Images"],
      "desc": "Studies have made it fairly evident that through accurate analysis, it is possible to obtain vital " +
        "diagnostic information from the retinal vasculature. However, segmenting vessels from retinal images " +
        "manually can be highly time-consuming and tedious. Implemented a U-Net model with boundary enhancement " +
        "and feature denoising modules to accurately segment out the retinal vasculature from its fundus image. " +
        "Also, built a classification model on top to classify the segmented pixels into arteries and veins. " +
        "The model will help detect ocular diseases and in addition to that, ailments like hypertension, " +
        "diabetes and vascular diseases.",
      "show": false, "gitImgShow": false, "subTitle": "Academic project",
      "gitLink": "", "imgUrl": "assets/Retina.png",
    },

    {
      "title": "Anti-spoofing algorithm for face recognition systems based on pupil response",
      "id": "project3", "class": "project", "subTitle": "Academic project", "reportImgShow": false, "reportLink": "",
      "skills": ["MATLAB", "Fast Radial Transform", "Liveness detection based on pupil response", "Pupil Detection"],
      "desc": "This project aimed at using image processing algorithms to calculate the area of the pupils in the input images captured in " +
        "different light settings. These pupil areas are analysed to detect the liveliness of the subject during face recognition.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/Anti-spoofing-output_pupil.png",
      "gitLink": "https://github.com/aishwaryamuthuvel/Anti-spoofing-for-Face-Recognition",
    },

    {
      "title": "Atrial Fibrillation (AF) episode Detection from ECG signals", "reportImgShow": false,
      "id": "project4", "class": "project", "subTitle": "Academic project", "reportLink": "",
      "skills": ["Dimensionality reduction", "Neural Networks", "Support Vector Machines", "Decision Trees"],
      "desc": "AF is a heart condition caused due to irregularity in the beating of the atrial chambers. An AF episode detection model was " +
        "trained on a dataset that was created using the R-R interval lengths extracted from the ECG signals of the patients.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/AF-ECG.png",
      "gitLink": "https://github.com/aishwaryamuthuvel/AF-Episode-Detection-ECG-signals",
    },

    {
      "title": "Ghost fingerprint Detection", "subTitle": "Academic project",
      "id": "project4", "class": "project", "reportImgShow": false, "reportLink": "",
      "skills": ["MATLAB", "Neural Networks", "K-nearest neighbours", "Random Forest", "Local frequency and orientation estimation",
        "Fast Fourier Transform"],
      "desc": "Fingerprint images collected might be corrupted by remnants from the previous fingerprints. " +
        "These are termed ghost fingerprints. The input image is divided into blocks and features based on " +
        "the local orientation, frequency and mean pixel intensity were extracted from it. Classification " +
        "models were trained on the features extracted to detect the presence of ghost prints in the input.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/Ghost_fingerprint_example.png",
      "gitLink": "https://github.com/aishwaryamuthuvel/Ghost-Fingerprint-Detection",
    },

    {
      "title": "Gender Detection through Speech Processing", "reportImgShow": false,
      "id": "project4", "class": "project", "subTitle": "Academic project", "reportLink": "",
      "skills": ["Neural Networks", "Support Vector Machines", "Gaussian Mixture Models",],
      "desc": "The acoustic features of an input speech signal were extracted using the MFCC algorithm. The extracted 12 MFCC " +
        "coefficients were used as features to train machine learning models to detect the gender of the speaker.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/automatic-speech-recognition-lead.jpg",
      "gitLink": "https://github.com/aishwaryamuthuvel/Gender-Detection",
    },

    {
      "title": "Text Summarization", "subTitle": "Academic project",
      "id": "project4", "class": "project", "reportImgShow": false, "reportLink": "",
      "skills": ["Extractive summarization", "Word2vec", "Logistic regression"],
      "desc": "The aim is to create a summary of the input text by identifying the most relevant information. " +
        "A logistic regression model was trained to score each sentence based on features like the similarity " +
        "between the Word2vec model vectors of the sentence and the input text, its length and position in the " +
        "input text. The top scored sentences were then used to create the summary.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/proj-text-summ.png",
      "gitLink": "https://github.com/aishwaryamuthuvel/Text-Summarization",
    },

    {
      "title": "Man Overboard", "subTitle": "Academic project",
      "id": "project4", "class": "project", "reportImgShow": false, "reportLink": "",
      "skills": ["MATLAB", "Optic Flow Motion model", "Object Tracking", "Distance estimation"],
      "desc": "The Man Overboard project, designed to help rescue missions, aims to track a test buoy in a video of it floating on rough " +
        "waters given its initial position and then estimate its distance from the camera in meters.",
      "show": false, "gitImgShow": true, "imgUrl": "assets/Man-overboard_Output.png",
      "gitLink": "https://github.com/aishwaryamuthuvel/Man-Overboard",
    },

  ]

}
