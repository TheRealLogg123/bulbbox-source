// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { DictionaryArray, BeepBoxOption, InstrumentType, toNameMap, TypePresets } from "../synth/SynthConfig";

export interface PresetCategory extends BeepBoxOption {
    readonly presets: DictionaryArray<Preset>;
}

export interface Preset extends BeepBoxOption {
    readonly isNoise?: boolean;
    readonly isMod?: boolean;
    readonly generalMidi?: boolean;
    readonly midiProgram?: number;
    readonly midiSubharmonicOctaves?: number;
    readonly customType?: InstrumentType;
    readonly settings?: any;
    
}

export const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|android|ipad|playbook|silk/i.test(navigator.userAgent);

export function prettyNumber(value: number): string {
    return value.toFixed(2).replace(/\.?0*$/, "");
}

export class EditorConfig {
    public static readonly version: string = "1.6"; // Using patch versions in display right now, maybe TODAY. // choptop84 here who wrote this??
    public static readonly versionDisplayName: string = "AbyssBox " + EditorConfig.version;

    public static readonly releaseNotesURL: string = "./patch_notes.html";

    public static readonly isOnMac: boolean = /^Mac/i.test(navigator.platform) || /Mac OS X/i.test(navigator.userAgent) || /^(iPhone|iPad|iPod)/i.test(navigator.platform) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
    public static readonly ctrlSymbol: string = EditorConfig.isOnMac ? "⌘" : "Ctrl+";
    public static readonly ctrlName: string = EditorConfig.isOnMac ? "command" : "control";

    public static customSamples: string[] | null;
	
    public static showSongDetailsAlert: boolean = true;
	
    public static readonly presetCategories: DictionaryArray<PresetCategory> = toNameMap([
        {
            name: "Custom Instruments", presets: <DictionaryArray<Preset>>toNameMap([
                { name: TypePresets[InstrumentType.chip], customType: InstrumentType.chip },
                { name: TypePresets[InstrumentType.fm], customType: InstrumentType.fm },
                { name: TypePresets[InstrumentType.noise], customType: InstrumentType.noise },
                { name: TypePresets[InstrumentType.spectrum], customType: InstrumentType.spectrum },
                { name: TypePresets[InstrumentType.drumset], customType: InstrumentType.drumset },
                { name: TypePresets[InstrumentType.harmonics], customType: InstrumentType.harmonics },
                { name: TypePresets[InstrumentType.pwm], customType: InstrumentType.pwm },
                { name: TypePresets[InstrumentType.pickedString], customType: InstrumentType.pickedString },
                { name: TypePresets[InstrumentType.supersaw], customType: InstrumentType.supersaw },
                { name: TypePresets[InstrumentType.customChipWave], customType: InstrumentType.customChipWave },
                { name: TypePresets[InstrumentType.fm6op], customType: InstrumentType.fm6op },
            ])
        },
        {
            name: "Base Instruments", presets: <DictionaryArray<Preset>>toNameMap([
                { name: "Square Wave", midiProgram: 80, settings: { "type": "chip", "eqFilter": [], "effects": ["aliasing"], "transition": "normal", "fadeInSeconds": 0, "fadeOutTicks": -1, "chord": "simultaneous", "wave": "square", "unison": "none", "envelopes": [] } },
                { name: "Square Pulse", midiProgram: 80, settings: {"type":"PWM","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"effects":["panning"],"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"unison":"none","pulseWidth":50,"decimalOffset":0,"envelopes":[],"isDrum":false} },
                { name: "White Noise", midiProgram: 80, settings: {"type":"noise","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"effects":["panning"],"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"unison":"none","wave":"white","envelopes":[],"isDrum":false} },
                { name: "FM Sine", midiProgram: 55, settings: {"type":"FM","volume":0,"eqFilter":[],"eqFilterType":true,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"effects":["panning"],"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"algorithm":"1←(2 3 4)","feedbackType":"1⟲","feedbackAmplitude":0,"operators":[{"frequency":"1×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5}],"envelopes":[],"isDrum":false} },
            ]),
        },
        {
            name: "Drum Presets", presets: <DictionaryArray<Preset>>toNameMap([
                { name: "C1 Square Kick", midiProgram: 80, settings: {"type":"FM","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"eqSubFilters0":[],"eqSubFilters1":[],"effects":["panning","pitch shift"],"pitchShiftSemitones":24,"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"algorithm":"1←(2 3 4)","feedbackType":"ALL","feedbackAmplitude":15,"operators":[{"frequency":"1×","amplitude":15,"waveform":"pulse width","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5}],"envelopes":[{"target":"feedbackAmplitude","envelope":"blip","inverse":false,"perEnvelopeSpeed":32,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"operatorAmplitude","envelope":"blip","inverse":false,"perEnvelopeSpeed":32,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1,"index":1},{"target":"operatorAmplitude","envelope":"blip","inverse":false,"perEnvelopeSpeed":32,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1,"index":2},{"target":"operatorAmplitude","envelope":"blip","inverse":false,"perEnvelopeSpeed":32,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1,"index":3},{"target":"pitchShift","envelope":"linear","inverse":false,"perEnvelopeSpeed":64,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":2},{"target":"noteVolume","envelope":"blip","inverse":false,"perEnvelopeSpeed":0.75,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1}],"isDrum":false} },
                { name: "C2 Snare (Part 1)", midiProgram: 80, settings: {"type":"FM","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"eqSubFilters0":[],"effects":["panning","transition type","pitch shift"],"transition":"interrupt","clicklessTransition":false,"pitchShiftSemitones":24,"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"algorithm":"1←(2 3 4)","feedbackType":"1⟲","feedbackAmplitude":0,"operators":[{"frequency":"1×","amplitude":15,"waveform":"pulse width","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5}],"envelopes":[{"target":"noteVolume","envelope":"decay","inverse":false,"perEnvelopeSpeed":10,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"noteVolume","envelope":"blip","inverse":false,"perEnvelopeSpeed":0.3,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"pitchShift","envelope":"linear","inverse":false,"perEnvelopeSpeed":256,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":2}],"isDrum":false} },
                { name: "D3 Snare (Part 2)", midiProgram: 80, settings: {"type":"noise","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"eqSubFilters0":[],"effects":["panning","transition type","pitch shift"],"transition":"interrupt","clicklessTransition":false,"pitchShiftSemitones":19,"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"unison":"none","wave":"white","envelopes":[{"target":"noteVolume","envelope":"decay","inverse":false,"perEnvelopeSpeed":10,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"noteVolume","envelope":"blip","inverse":false,"perEnvelopeSpeed":0.4,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"pitchShift","envelope":"linear","inverse":false,"perEnvelopeSpeed":64,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"pitchShift","envelope":"linear","inverse":false,"perEnvelopeSpeed":24,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1}],"isDrum":false} },
                { name: "A4 Hi-Hat", midiProgram: 80, settings: {"type":"FM","volume":0,"eqFilter":[{"type":"low-pass","cutoffHz":13454.34,"linearGain":2.8284}],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"eqSubFilters0":[{"type":"low-pass","cutoffHz":13454.34,"linearGain":2.8284}],"eqSubFilters1":[],"effects":["panning"],"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"algorithm":"1←(2 3 4)","feedbackType":"ALL","feedbackAmplitude":15,"operators":[{"frequency":"1×","amplitude":15,"waveform":"pulse width","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"100×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5}],"envelopes":[{"target":"noteVolume","envelope":"decay","inverse":false,"perEnvelopeSpeed":15,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1},{"target":"noteVolume","envelope":"punch","inverse":false,"perEnvelopeSpeed":0,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":0.5}],"isDrum":false} },
            ]),
        },
        {
            name: "Bass Presets", presets: <DictionaryArray<Preset>>toNameMap([
                { name: "Shocker Bass", midiProgram: 80, settings: {"type":"FM","volume":0,"eqFilter":[],"eqFilterType":false,"eqSimpleCut":10,"eqSimplePeak":0,"envelopeSpeed":12,"discreteEnvelope":false,"eqSubFilters1":[],"effects":["panning"],"pan":0,"panDelay":10,"fadeInSeconds":0,"fadeOutTicks":-1,"algorithm":"1←(2 3 4)","feedbackType":"4⟲","feedbackAmplitude":5,"operators":[{"frequency":"1×","amplitude":15,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":13,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":3,"waveform":"sine","pulseWidth":5},{"frequency":"10×","amplitude":9,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5},{"frequency":"1×","amplitude":0,"waveform":"sine","pulseWidth":5}],"envelopes":[{"target":"operatorAmplitude","envelope":"twang","inverse":false,"perEnvelopeSpeed":10,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1,"index":1},{"target":"operatorAmplitude","envelope":"twang","inverse":false,"perEnvelopeSpeed":64,"perEnvelopeLowerBound":0,"perEnvelopeUpperBound":1,"index":3}],"isDrum":false} },
            ]),
        },
        

    ]);

    public static valueToPreset(presetValue: number): Preset | null {
        const categoryIndex: number = presetValue >> 6;
        const presetIndex: number = presetValue & 0x3F;
        return EditorConfig?.presetCategories[categoryIndex].presets[presetIndex];
    }

    public static midiProgramToPresetValue(program: number): number | null {
        for (let categoryIndex: number = 0; categoryIndex < EditorConfig.presetCategories.length; categoryIndex++) {
            const category: PresetCategory = EditorConfig.presetCategories[categoryIndex];
            for (let presetIndex: number = 0; presetIndex < category.presets.length; presetIndex++) {
                const preset: Preset = category.presets[presetIndex];
                if (preset.generalMidi && preset.midiProgram == program) return (categoryIndex << 6) + presetIndex;
            }
        }
        return null;
    }

    public static nameToPresetValue(presetName: string): number | null {
        for (let categoryIndex: number = 0; categoryIndex < EditorConfig.presetCategories.length; categoryIndex++) {
            const category: PresetCategory = EditorConfig.presetCategories[categoryIndex];
            for (let presetIndex: number = 0; presetIndex < category.presets.length; presetIndex++) {
                const preset: Preset = category.presets[presetIndex];
                if (preset.name == presetName) return (categoryIndex << 6) + presetIndex;
            }
        }
        return null;
    }

    public static instrumentToPreset(instrument: InstrumentType): Preset | null {
        return EditorConfig.presetCategories[0].presets.dictionary?.[TypePresets?.[instrument]];
    }
}
