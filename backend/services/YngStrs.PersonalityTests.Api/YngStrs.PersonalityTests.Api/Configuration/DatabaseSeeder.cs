using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using YngStrs.Common.Api;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;

namespace YngStrs.PersonalityTests.Api.Configuration
{
    public class DatabaseSeeder
    {
        private static readonly List<PersonalityTest> PersonalityTests = new List<PersonalityTest>
        {
            new PersonalityTest
            {
                Id = Guid.NewGuid(),
                Description = "Initial Personality Test",
                IsShared = true,
                CustomerId = Guid.Parse("fa506b08-0e67-41de-aa6b-50b3c7ebfd9b")
            }
        };

        private static readonly List<TestResult> TestResults = new List<TestResult>
        {
            new TestResult
            {
                Id = Guid.NewGuid(),
                PersonalityTestId = PersonalityTests.First().Id,
                Value = "idea"
            },
            new TestResult
            {
                Id = Guid.NewGuid(),
                PersonalityTestId = PersonalityTests.First().Id,
                Value = "people"
            },
            new TestResult
            {
                Id = Guid.NewGuid(),
                PersonalityTestId = PersonalityTests.First().Id,
                Value = "process"
            },
            new TestResult
            {
                Id = Guid.NewGuid(),
                PersonalityTestId = PersonalityTests.First().Id,
                Value = "action"
            }
        };

        private static readonly List<Language> Languages = new List<Language>
        {
            new Language
            {
                Id = Guid.NewGuid(),
                EnglishName = "Bulgarian",
                NativeName = "Български",
                EnumValue = ProjectLanguages.BG
            },
            new Language
            {
                Id = Guid.NewGuid(),
                EnglishName = "English",
                NativeName = "English",
                EnumValue = ProjectLanguages.EN
            }
        };

        private static readonly List<TestResultTitle> TestResultTitles = new List<TestResultTitle>
        {
            new TestResultTitle
            {
                LanguageId = Languages[1].Id,
                TestResultId = TestResults[0].Id,
                Description = "Idea Oriented"
            },
            new TestResultTitle
            {
                LanguageId = Languages[1].Id,
                TestResultId = TestResults[1].Id,
                Description = "People Oriented"
            },
            new TestResultTitle
            {
                LanguageId = Languages[1].Id,
                TestResultId = TestResults[2].Id,
                Description = "Process Oriented"
            },
            new TestResultTitle
            {
                LanguageId = Languages[1].Id,
                TestResultId = TestResults[3].Id,
                Description = "Action Oriented"
            },
        };

        private static readonly List<TestQuestion> TestQuestions = new List<TestQuestion>
        {
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 1,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 2,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 3,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 4,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 5,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 6,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 7,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 8,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 9,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 10,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 11,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 12,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 13,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 14,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 15,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 16,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 17,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 18,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 19,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 20,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 21,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 22,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 23,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 24,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 25,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 26,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 27,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 28,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 29,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 30,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 31,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 32,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 33,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 34,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 35,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 36,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 37,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 38,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 39,
                PersonalityTestId = PersonalityTests.First().Id
            },
            new TestQuestion
            {
                Id = Guid.NewGuid(),
                SerialNumber = 40,
                PersonalityTestId = PersonalityTests.First().Id
            }
        };

        private static readonly List<CommonQuestionTitle> CommonQuestionTitles = new List<CommonQuestionTitle>
        {
            new CommonQuestionTitle
            {
                Id = Guid.NewGuid(),
                LanguageId = Languages.First().Id,
                Description = "Избери едно от двете твърдения, което в по-голяма степен се отнася за теб."
            }
        };

        private static List<TestQuestionTitle> TestQuestionTitles()
        {
            var list = new List<TestQuestionTitle>();

            foreach (var testQuestion in TestQuestions)
            {
                list.Add(new TestQuestionTitle
                {
                    TestQuestionId = testQuestion.Id,
                    CommonQuestionTitleId = CommonQuestionTitles.First().Id
                });
            }

            return list;
        }

        private static readonly List<string> ImagesFileNames = new List<string>
        {
            "1.jpg",
            "19.jpg",
            "2.jpg",
            "20.jpg",
            "23.jpg",
            "24.jpg",
            "31.jpg",
            "32.jpg",
            "41.jpg",
            "42.jpg",
            "45.jpg",
            "46.jpg",
            "5.jpg",
            "51.jpg",
            "52.jpg",
            "6.jpg",
            "69.jpg",
            "70.jpg",
            "77.jpg",
            "78.jpg"
        };

        private static readonly Dictionary<string, string> ImagesMetaDataDictionary 
            = new Dictionary<string, string>
            {
                { "1.jpg", "I'm acting." }, // 0
                { "19.jpg", "I am communicative." }, // 1
                { "2.jpg", "I find a solution." }, // 2
                { "20.jpg", "I'm creative." }, // 3 ---
                { "23.jpg", "I'm planning." }, // 4
                { "24.jpg", "I'm acting on the merits." }, // 5 ---
                { "31.jpg", "Multitasking." }, // 6
                { "32.jpg", "I think carefully." }, // 7 --
                { "41.jpg", "I'm an adventurer."           }, // 8
                { "42.jpg", "I'm a researcher."            }, // 9
                { "45.jpg", "I love to read."              }, // 10
                { "46.jpg", "I solve problems."            }, // 11
                { "5.jpg", "I am a dreamer."               }, // 12
                { "51.jpg", "I trust the facts."           }, // 13
                { "52.jpg", "I use my imagination."        }, //14
                { "6.jpg", "I'm sociable."                 }, // 15
                { "69.jpg", "I'm organized."               }, // 16
                { "70.jpg", "I jump from task to task."    }, // 17
                { "77.jpg", "I think abstractly."          }, // 18
                { "78.jpg", "I am focused on the details." } //19
            };

        private static readonly List<OptionImageBinary> OptionImages = new List<OptionImageBinary>
        {
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("1.jpg", "I'm acting.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("19.jpg", "I am communicative.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("2.jpg", "I find a solution.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("20.jpg", "I'm creative.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("23.jpg", "I'm planning.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("24.jpg", "I'm acting on the merits.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("31.jpg", "Multitasking")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("32.jpg", "I think carefully.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("41.jpg", "I'm an adventurer.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("42.jpg", "I'm a researcher.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("45.jpg", "I love to read.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("46.jpg", "I solve problems.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("5.jpg", "I am a dreamer.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("51.jpg", "I trust the facts." )),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("52.jpg", "I use my imagination.")),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("6.jpg", "I'm sociable.")),
            new OptionImageBinary
                (BuildOptionImageBinaryByEmbeddedResource("69.jpg", "I'm organized." )),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("70.jpg", "I jump from task to task." )),
            new OptionImageBinary(
                BuildOptionImageBinaryByEmbeddedResource("77.jpg", "I think abstractly." )),
            new OptionImageBinary
                (BuildOptionImageBinaryByEmbeddedResource("78.jpg", "I am focused on the details.")),
        };


        private static OptionImageBinary BuildOptionImageBinaryByEmbeddedResource(string fileName, string description)
        {
            const string resourcePath = "YngStrs.PersonalityTests.Api.EmbeddedResources.";

            var imgResourceStream = Assembly
                .GetExecutingAssembly()
                .GetManifestResourceStream(resourcePath + fileName);

            return new OptionImageBinary
            {
                Id = Guid.NewGuid(),
                Description = description,
                FileName = fileName,
                ImageData = imgResourceStream.ReadAllBytes()
            };
        }

        private static readonly List<QuestionOption> QuestionOptions = new List<QuestionOption>
        {
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[0].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[0].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[0].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[2].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[1].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[1].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[2].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[12].Id,
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[2].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[15].Id,
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[3].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[3].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[4].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[4].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[5].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[5].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[6].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[6].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[7].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[7].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[8].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[8].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[9].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[1].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[9].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[3].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[10].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[10].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[11].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[4].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[11].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[5].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[12].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[12].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[13].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[13].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[14].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[14].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[15].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[6].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[15].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[7].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[16].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[16].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[17].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[17].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[18].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[18].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[19].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[19].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[20].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[8].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[20].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[9].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[21].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[21].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[22].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[10].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[22].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[11].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[23].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[23].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[24].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[24].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[25].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[13].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[25].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[14].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[26].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[26].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[27].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[27].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[28].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[28].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[29].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[29].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[30].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[30].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[31].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[31].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[32].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[32].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[33].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[33].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[34].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[16].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[34].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[17].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[35].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[35].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[36].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[36].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[37].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[37].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[38].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[18].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[38].Id,
                IsTextOnly = false,
                OptionImageBinaryId = OptionImages[19].Id
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[39].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            },
            new QuestionOption
            {
                Id = Guid.NewGuid(),
                TestQuestionId = TestQuestions[39].Id,
                IsTextOnly = true,
                OptionImageBinaryId = null
            }
        };

        private static readonly List<QuestionOptionTitle> QuestionOptionTitles
            = new List<QuestionOptionTitle>
            {
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[0].Id,
                    Description = "Действам"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[1].Id,
                    Description = "Намирам решение"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[2].Id,
                    Description = "„Сговорна дружина планина повдига“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[3].Id,
                    Description = "Често ми светва лампичката"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[4].Id,
                    Description = "Мечтател съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[5].Id,
                    Description = "Общителен съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[6].Id,
                    Description = "Харесва ми, когато срещите са  добре организирани."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[7].Id,
                    Description = "Винаги спазвам крайните срокове."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[8].Id,
                    Description = "„Не оставям днешната работа за утре“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[9].Id,
                    Description = "„Три пъти мери, един път режи“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[10].Id,
                    Description = "Душата на компанията съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[11].Id,
                    Description = "Винаги търся нови възможности."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[12].Id,
                    Description = "Сам съм си шеф"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[13].Id,
                    Description = "Обичам да правя всичко от игла до конец"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[14].Id,
                    Description = "Грижа ме е за чувствата на другите"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[15].Id,
                    Description = "Обичам да провокирам и да наблюдавам реакциите на другите"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[16].Id,
                    Description = "„По дрехите посрещат, а по ума изпращат“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[17].Id,
                    Description = "„Капка по капка вир прави“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[18].Id,
                    Description = "Комуникативен съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[19].Id,
                    Description = "Креативен съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[20].Id,
                    Description = "„Къща без основа не се строи“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[21].Id,
                    Description = "„Другар в нужда се познава“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[22].Id,
                    Description = "Планирам"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[23].Id,
                    Description = "Действам по същество"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[24].Id,
                    Description = "Умея да се справям с напрежението."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[25].Id,
                    Description = "Съвършенството се постига с практика."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[26].Id,
                    Description = "Добър слушател съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[27].Id,
                    Description = "Мисля бързо."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[28].Id,
                    Description = "Екипен играч съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[29].Id,
                    Description = "Имам логическо мислене."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[30].Id,
                    Description = "Мултитаскинг"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[31].Id,
                    Description = "Обмислям внимателно"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[32].Id,
                    Description = "Скачайки в дълбокото, уча най-добре."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[33].Id,
                    Description = "Логика &gt; Емоции."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[34].Id,
                    Description = "Хората са като отворена книга за мен."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[35].Id,
                    Description = "Не обичам детайлите."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[36].Id,
                    Description = "Първо анализирам, после действам."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[37].Id,
                    Description = "Умея да водя работни срещи."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[38].Id,
                    Description = "„И утре е ден“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[39].Id,
                    Description = "„Казана дума, хвърлен камък“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[40].Id,
                    Description = "Авантюрист съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[41].Id,
                    Description = "Изследовател съм"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[42].Id,
                    Description = "Открит човек съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[43].Id,
                    Description = "Иновативен съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[44].Id,
                    Description = "Обичам да чета."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[45].Id,
                    Description = "Решавам проблеми."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[46].Id,
                    Description = "Концентриран/а съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[47].Id,
                    Description = "За мен е важен крайният резултат."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[48].Id,
                    Description = "Обичам да опознавам хората."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[49].Id,
                    Description = "Обичам разнообразието."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[50].Id,
                    Description = "Доверявам се на фактите."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[51].Id,
                    Description = "Използвам въображението си."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[52].Id,
                    Description = "Губя търпение при бавни процеси."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[53].Id,
                    Description = "Имам хиляди мисли в главата си."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[54].Id,
                    Description = "Не обичам прибързаните решения."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[55].Id,
                    Description = "Екипната работа води до прогрес."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[56].Id,
                    Description = "Не се замислям два пъти."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[57].Id,
                    Description = "Не взимам емоционални решения."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[58].Id,
                    Description = "Важно ми е да съм харесван."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[59].Id,
                    Description = "Правя правилните заключения."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[60].Id,
                    Description = "Търся странично мнение."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[61].Id,
                    Description = "Следвам определена методология."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[62].Id,
                    Description = "Обичам да свършвам работата."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[63].Id,
                    Description = "Добрите взаимоотношения са важни."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[64].Id,
                    Description = "Импулсивен/импулсивна съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[65].Id,
                    Description = "Широкоскроен/а съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[66].Id,
                    Description = "„Блага дума железни врати отваря“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[67].Id,
                    Description = "Обичам трудните задачи."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[68].Id,
                    Description = "Организиран съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[69].Id,
                    Description = "Скачам от задача на задача"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[70].Id,
                    Description = "Комуникирам без проблем с различни хора."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[71].Id,
                    Description = "Стремя се към личностно развитие."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[72].Id,
                    Description = "Идеен съм."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[73].Id,
                    Description = "Не обичам да си губя времето."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[74].Id,
                    Description = "„Обичам да плавам в собствени води“"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[75].Id,
                    Description = "За мен е важно да имам добър ментор."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[76].Id,
                    Description = "Мисля абстрактно."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[77].Id,
                    Description = "Фокусиран/а съм в детайлите"
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[78].Id,
                    Description = "Не обичам разтягането на локуми."
                },
                new QuestionOptionTitle
                {
                    LanguageId = Languages.First().Id,
                    QuestionOptionId = QuestionOptions[79].Id,
                    Description = "Вярвам в себе си."
                }
            };

        private static readonly List<ResultOptionMap> ResultOptionMaps = new List<ResultOptionMap>
        {
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[0].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[1].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[2].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[3].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[4].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[5].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[6].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[7].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[8].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[9].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[10].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[11].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[12].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[13].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[14].Id,
                TestResultId = TestResults[1].Id
            },

            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[15].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[16].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[17].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[18].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[19].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[20].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[21].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[22].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[23].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[24].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[25].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[26].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[27].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[28].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[29].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[30].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[31].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[32].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[33].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[34].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[35].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[36].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[37].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[38].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[39].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[40].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[41].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[42].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[43].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[44].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[45].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[46].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[47].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[48].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[49].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[50].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[51].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[52].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[53].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[54].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[55].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[56].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[57].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[58].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[59].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[60].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[61].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[62].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[63].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[64].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[65].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[66].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[67].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[68].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[69].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[70].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[71].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[72].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[73].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[74].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[75].Id,
                TestResultId = TestResults[1].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[76].Id,
                TestResultId = TestResults[0].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[77].Id,
                TestResultId = TestResults[2].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[78].Id,
                TestResultId = TestResults[3].Id
            },
            new ResultOptionMap
            {
                QuestionOptionId = QuestionOptions[79].Id,
                TestResultId = TestResults[1].Id
            },
        };

        private readonly PersonalityTestDbContext _dbContext;

        public DatabaseSeeder(PersonalityTestDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SeedDatabase()
        {
            if (!IsDatabaseEmpty())
            {
                return;
            }

            _dbContext.AddRange(PersonalityTests);
            _dbContext.SaveChanges();

            _dbContext.TestResults.AddRange(TestResults);
            _dbContext.SaveChanges();

            _dbContext.AddRange(Languages);
            _dbContext.SaveChanges();

            _dbContext.AddRange(TestResultTitles);
            _dbContext.SaveChanges();

            _dbContext.AddRange(TestQuestions);
            _dbContext.SaveChanges();

            _dbContext.AddRange(CommonQuestionTitles);
            _dbContext.SaveChanges();

            _dbContext.AddRange(TestQuestionTitles());
            _dbContext.SaveChanges();

            _dbContext.AddRange(OptionImages);
            _dbContext.SaveChanges();

            _dbContext.AddRange(QuestionOptions);
            _dbContext.SaveChanges();

            _dbContext.AddRange(QuestionOptionTitles);
            _dbContext.SaveChanges();

            _dbContext.AddRange(ResultOptionMaps);
            _dbContext.SaveChanges();
        }

        private bool IsDatabaseEmpty() =>
            !_dbContext.PersonalityTests.Any() &&
            !_dbContext.TestQuestions.Any() &&
            !_dbContext.QuestionOptions.Any();
    }
}